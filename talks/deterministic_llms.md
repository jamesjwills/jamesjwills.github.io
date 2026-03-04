# Deterministic LLMs

## Temperature = 0

LLMs work by computing the probability distribution over the next possible word or token in a sequence. After each token is chosen and appended to the response, the distribution is recomputed — and the process repeats until the response is complete.

But how does a particular token actually get chosen? For the most part, it is sampled randomly according to those probabilities: token A might be chosen 30% of the time, token B 50% of the time, and token C 20% of the time.

There is, however, a way of reshaping this probability distribution to make certain tokens more or less likely — roughly corresponding to making the model more "creative" at one extreme, or more deterministic at the other. This parameter is called **temperature**. A higher temperature (e.g. temperature = 1 or above) flattens the distribution, suppressing the most likely tokens and boosting the least likely ones, making the model more prone to surprising or varied outputs. A temperature of 0, by contrast, forces the model to always select the single most probable token — a strategy known as greedy decoding.

It might seem, therefore, that setting temperature = 0 ought to guarantee identical outputs for identical inputs — in other words, full determinism. And yet, it does not. The reasons are extremely interesting and non-obvious.

## Floating point non-associativity.

For the first reason, let’s consider a simplified example of what is going on in a GPU hosting an AI model. At some point it is going to have to sum a vast array of numbers in matrix multiplication.

Here is an example array: [insert example array.]

Now, you could write a program which just runs on a single thread on a single core which sums these numbers. But if the array is huge, obviously the time it takes to sum these numbers is going to increase with the size of the array.

If you want to have fast computation on very large arrays, you have to divide up the work across multiple threads running across multiple cores: one core adds one set of numbers really really fast, another core adds another set really really fast, etc. Then we add the results from each thread together to get the final result.

And here is where the indeterminism comes in. Suppose core 1 finishes first, then core 2 then core 3. The result is: [insert result here]

Now suppose core 3 finishes first, followed by core 1 followed by core 2. Then the result is: [insert result here]

You get a different answer!

This feature is called floating point non-associativity. The order in which you add floating point numbers matters. In the context of the language models, the different numeric results result in different tokens being picked, resulting in distinct outputs.

So, obviously then the solution is just to add them all in the same order and get rid of the indeterminism that way. 

This is possible, with deterministic so-called **reduction algorithms**. These basically sum the numbers by core. Always add the result of the thread running on core A first, then core B, even if core B finishes first and has to wait for core A.

Naturally, this algorithm is slower. Indeterministic reduction algorithms just sum the results of whichever cores finish first. Therefore, these algorithms optimize for throughput, not determinism. That is the tradeoff.

## Batching

Even if you swallowed the performance dip by choosing a deterministic reduction tree algorithm so that the numbers of the array summed to the same number every time, this STILL wouldn’t get rid of the indeterminism. This final contribution to the indeterminism is the most surprising I think.

When you hit the production AI endpoint with your prompt, you are not important enough to get your own GPU which computes the response to your prompt. Your prompt is batched with other prompts received by the model. 

A GPU is a massively parallel processor optimized for high-throughput arithmetic workloads, especially those that can be broken into many independent operations.

Of course, when prompts hit the endpoint, they are not all the same length. Some might be 100 tokens long, others 500. So if they are to be batched together you have to make them fit in the same size matrix without losing any information - which is 500x500. Therefore, you have to pad out the shorter prompts with so-called padding tokens which carry no semantic meaning, but are necessary to enable the batching and subsequent computation on the matrix. It’s a data layout requirement imposed by the hardware.

Because of the larger matrix than it would have been had just the 100 token prompt been processed, the GPU breaks down the matrix multiplication in a different way across the cores, so the path through the floating point arithmetic is different, and so accumulates different rounding errors, ultimately resulting in a different response.

Thus, even if you fix all the other issues, but retain batching, even though the computation would be deterministic *on the batch* it would **appear** indeterministic to each individual user because they have no control over which other prompts theirs is batched with.