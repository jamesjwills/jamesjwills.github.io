# Bluff Your Way In: Quantum Computing

## INTRODUCTION

It is a habit of philosophers to ask annoying questions. Ask "What is a quantum computer?" and you will likely receive the response "Well, what is a (classical) computer, anyway?" (the "anyway" is very important…) But questions which may seem annoying can be deep and fascinating. The question "what is a computer?" let alone "what is a quantum computer?" is one such question.

Let's begin by making an important distinction: that between the abstract notion of a computer and the concrete implementation of it. There are computer-instances everywhere - your phone, laptop, watch or calculator. In the last century, some computer-instances were human. But they are all computers - they all instantiate the abstract notion of "computer". Although they are programmed to perform different functions, they all do fundamentally the same thing: they all consist of a *state* and some *rules* for changing that state.

For classical computers, the state is a sequence of *bits* which can take one of two values (0 or 1) and the rules for changing this sequence of bits are given by the *logic gates*. Quantum computers are still computers: they consist of a state and rules for changing that state. But in this case, the state is represented as a sequence of quantum bits or *qubits* and the rules for changing that state are represented by *quantum logic gates*.

Still, although this may technically answer our question, it does not enlighten us. One of the questions we really want insight on, of course, it what it is about qubits and quantum logic gates which give quantum computing its supposed advantage over classical computers. Which inherently quantum feature is responsible for, or explains, the advantage? And what is that advantage (anyway)?

## SUPERPOSITION AND ENTANGLEMENT

Two fundamental concepts in quantum theory are often linked to the explanation of quantum speedup: superposition and entanglement. We must try to understand these to get insight into our question.

Despite people's best efforts, there is no simultaneously precise and comprehensible explication of these ideas. Various attempts usually exhibit a trade-off between precision and comprehensibility. I choose to be precise: these ideas are quantum, and therefore non-classical, and therefore not amenable to classical explications. And since we generally go about understanding the world through a classical lens, quantum theory is going to be tough to get a grip on.

**Superposition**: if the state of a qubit can be $|0\rangle$  or $|1\rangle$ then another possible state of the qubit is $\alpha|0\rangle + \beta|1\rangle$, where $\alpha$ and $\beta$ are complex numbers such that $|\alpha|^2+|\beta|^2=1$.

**Entanglement**: the global state of two entangled systems cannot be described in terms of the state of the individual systems.

All hope of insight or understanding is not lost entirely, however. Much understanding of superposition and entanglement can be gained with a sensible and careful comparison between classical and quantum states. Here is a simple example of the state of a 4-bit classical computer:

$$
0_{A}1_{B}1_{C}0_{D} 
$$

This says: bit $A$ has state , bit $B$ has state 1, bit $C$ has state $1$ and bit $D$ has state $0$. This makes the state of the computer as a whole, the global state, just the collection of the individual states of the classical bits. This is all there is to say about the state of classical computers.

For a 4-qubit quantum computer, it is possible to have an exactly analogous situation: 

$$
|0\rangle_{A}|1\rangle_{B}|1\rangle_{C}|0\rangle_{D} 
$$

This says that qubit $A$ has state $|0\rangle$, qubit $B$ has state $|1\rangle$ qubit $C$ has state $|1\rangle$ and qubit $D$ has state $|0\rangle$. This makes the state of the computer as a whole, the global state, just the collection of the individual states of the qubits. But this is certainly not all there is to say about quantum computers.

Because of superposition, if $|0\rangle_A$ and $|1\rangle_A$ are possible states of qubit $A$, then $\alpha|1\rangle_A + \beta|0\rangle_A$ is also a possible state of qubit $A$. This linear superposition is a mathematical fact of quantum theory. The interpretation of $|1\rangle$ and $|0\rangle$ as states of the qubit is what generates the weirdness: how is it possible for the qubit to be simultaneously in states $|0\rangle$ and $|1\rangle$? By contrast, to say that $0_A + 1_A$ is a possible classical state of bit $A$ is just nonsense.

On to entanglement. The explication I gave above said that the joint, or "global", state of entangled quantum systems $A$ and $B$ cannot be broken down into the individual states of $A$ and $B$. To understand why this is totally bizarre, consider the global state of the 4-bit classical computer I described above: in this case, the global state is described precisely by listing the state of the individual bits. In fact, it is hard to imagine any other way of describing the global state other than just saying what state its constituent parts are in. We may say in this case that the parts are prior to the whole. In a similar way, we have the global state of the 4-qubit quantum system explained above. This state can be described in terms of the state of its parts because it is not an entangled quantum state.

But here is an example of an entangled quantum state: $|1\rangle_A|0\rangle_B + |0\rangle_A|1\rangle_B$. In this case, we say that systems $A$ and $B$ are entangled. This state cannot be broken down (mathematically speaking, factorized) into the state of $A$ and the state of $B$. It is just mathematically impossible to describe the global state in terms of the individual states. In fact, it is not a stretch to say that, for this state, $A$ and $B$ do not have well-defined individual states. They only have a well-defined joint, global state. In a sense then, for entangled states, somehow the whole is prior to the parts.

## FEYNMAN AND THE GENESIS OF QUANTUM COMPUTATION

With this understanding under our belts, we are in a position to think about why quantum computers were conceived in the first place. What sort of problems were quantum computers meant to crack, and why can't existing classical computers do it?

This insight from Richard Feynman, right at the genesis of quantum computation, answers these questions:

> "The rule of simulation that I would like to have is that the number of computer elements required to simulate a large physical system is only to be proportional to the space-time volume of the physical system. I don't want to have an explosion. That is, if you say I want to explain this much physics, I can do it exactly and I need a certain-sized computer. If doubling the volume of space and time means I'll need an exponentially larger computer, I consider that against the rules (I make up the rules, I'm allowed to do that)."
> 

Feynman's 'rule' aims to place a sanity constraint on the size of computer used to model a physical system. Suppose we have a physical system which requires a computer of a certain size to model. Then suppose we come across a physical system twice the size. If the size of the computer doubles, fine. If the size of the computer increases by, say factor $4=2^2$, not fine, because this would be an "exponentially larger computer". If four times the size of computer for twice the size of the physical system might not seem bad, consider a physical system ten times the size.

On this understanding, this would require a computer $2^{10}=1024$ times bigger. We end up in a situation where the model does not scale manageably with the size of the system; it scales exponentially. Therefore, as the size of the system increases, it quickly becomes impossible to model; very quickly, as we scale the physical system, the computers become either unbuildable or take too long to run the program.

But this is all speaking abstractly. A concrete example of this phenomenon is where we try to model quantum systems with classical computers. Indeed, this is exactly what Feynman had in mind, and is of particular relevance to chemistry where scientists attempt to model molecules as quantum systems on classical (super) computers. To understand why such modelling is so difficult, according to Feynman, I will give a simple argument for why the size of classical computer required to model quantum systems scales exponentially with the size of the quantum system.

Consider a two classical-bit system: they can be in one of $2^2=4$ possible states $0_A0_B$, $0_A1_B$, $1_A0_B$ and $1_A1_B$. For $n$ bits, there are $2^n$ possible states. Now consider a two qubit system. Initially, the situation looks similar: we can have four possible 'basis' states $|0\rangle_A|0\rangle_B$, $|0\rangle_A|1\rangle_B$, $|1\rangle_A|0\rangle_B$ and $|1\rangle_A|1\rangle_B$. But because of superposition, now $\alpha|00\rangle +\beta|01\rangle +\gamma|10\rangle +\delta|11\rangle$ (where $\alpha$, $\beta$, $\gamma$ and $\delta$ are complex numbers such that $|\alpha|^2+|\beta|^2+|\gamma|^2+|\delta|^2=1$) also counts as a possible state of the computer, in addition to the four basis states already listed. How many more bits of information are required now to describe the state of this quantum system? Since we need more bits to store the information about the numbers $\alpha$, $\beta$, $\gamma$, $\delta$ we need $4=2^2$ more bits. For $n$ bits we need $2^n$ more bits to classically model the quantum state. (In fact it's at least $2.2^n$ because these constants are complex numbers for which need two real numbers to represent). The point is, because you also need to represent these constants and there are $2^n$ of them, this represents the exponential blow-up in the size of computer needed to model this quantum system.

## ARE QUANTUM COMPUTERS 'BETTER'?

If that explains why you will find it difficult to model quantum systems on a classical computer, it doesn't really explain why quantum computers are somehow "better" or "more performant" than classical computers. Let's explore what that might mean. I think the result of this exploration is rather surprising. To give a preview, let's consider what we might mean by "better". Here are some plausible interpretations of "better". Does "better" mean:

1. More compact?
2. Easier to build?
3. Faster?
4. More capable?

The answers, which I think are rather surprising are "No", "No", "It depends" and "No". I will explain shortly what I mean by "capable".

I'm going to focus on interpretations 3 and 4. The way I see it, these are the fundamental questions, whereas 1 and 2 really speak to the engineering problems in building quantum computers, something I do not touch on here.

To begin with 3. What does it mean for one computer to be "faster" than another? There are two senses of "fast", as I see it. The laptop or phone you are reading this on is faster than the bricks we had back in the year 2000 because it has more processing power and can run whatever algorithm in a shorter time. This is due to better hardware design, usually in the form of greater transistor density. This sense of "fast" is a hardware innovation. Is this the sense in which quantum computers are faster? No. Of course, some quantum-computer-instance may be faster in this sense than some classical-computer-instance (no doubt modern quantum computers are faster at Algorithm A then classical-computer-instances of yesteryear). Some classical computer-instance may be faster than some other quantum-computer-instance. Some quantum computer-instances are faster than other quantum-computer-instances at returning the result of an algorithm. But this is not the sense of "fast" meant in the context of quantum speedup.

Another sense of "fast" is this. Algorithm B may be faster at returning a result than Algorithm A for some problem. For example, we know that the General Number Field Sieve (GNFS) algorithm is more performant than the Trial Division Algorithm for factorising integers into their prime factors; in general, it would take Trial Division much longer than GNFS to factorise the number.

The existence of faster algorithms is partly due to the creativity of mathematicians in designing more performant algorithms. Algorithm design is an inherently creative endeavour. It must be, for if it were not creative, it would be algorithmic, and if there were an algorithm for generating better algorithms to solve a particular problem, we would have all the best algorithms already. And we don't, so algorithm design is creative.

But it is crucial to remember that the performance of algorithms is strictly constrained by the architecture of the computer they run on. Classical algorithms are those algorithms which run on a classical computer and are designed with the architecture of the classical computer in mind: the algorithm tries to make the most efficient use of the classical bits and logic gates implemented in the hardware to solve the problem efficiently. A good example of this is the Quicksort sorting algorithm. It uses a divide-and-conquer approach that aligns with sequential processing nature of classical computers, implements in-place sorting to minimize memory usage, and leverages cache efficiency through its partitioning strategy. These characteristics make quicksort particularly well-suited for classical CPUs, demonstrating how algorithms are optimised and designed for specific hardware architectures.

Quantum computers, as we have already seen, have a fundamentally different build architecture to classical computers. This fact opens up a whole new landscape of quantum algorithm design: algorithms which make full use of the qubits, quantum logic gates and the uniquely quantum features of superposition, entanglement (and interference, but I do not touch on this here).

In integer prime factorisation, the most famous context of algorithm design, we have seen quantum algorithms beat classical algorithms by huge margins; Shor's algorithm, designed for the quantum computer architecture, makes use of quantum features to factorise integers exponentially faster than known classical algorithms can.

Thus we have seen, initially at least, that the reason for quantum speed up is not the hardware the computer is built out of but rather the underlying architecture design of the computer, allowing algorithms to be designed to take full advantage of that architecture resulting in much more performant algorithms.

In short, quantum computers are faster, not because of better hardware, but because of the new quantum computer architecture on which new quantum algorithms can be designed and run. Quantum computing represents not just a new type of machine, but a fundamentally different way of thinking about computation.

## ARE QUANTUM COMPUTERS MORE 'CAPABLE'?

By this I mean: can a quantum computer solve problems which a classical computer cannot? This is a tempting, though false, thought. Here is a simple argument which proves this point:

1. Classical computers are Turing-complete.
2. Classical computations can be simulated on quantum computers and vice versa.
3. Therefore, quantum computers are Turing-complete.
4. Therefore, quantum computers have no computational advantage (in this sense) over classical computers.

This is not to say, of course, that quantum computers have no computational advantage at all over classical computers. This is just to say that the set of problems that they are each able to solve is exactly the same. It's just that, as we have already seen, quantum computers can perhaps solve some of them much more quickly.

But questions remain, even regarding this point. Granted, in the case of integer prime factorisation, there is the famous example of Shor's algorithm, which trumps all classical algorithms at this particular problem. But is it the case that, for every problem solvable with a classical algorithm, a quantum algorithm exists which solves it in a significantly quicker time? No. Is there any way to know or decide whether, for a given classical problem-solution, a quantum solution exists? No.

Why not? Because, as I claimed earlier, the designing of algorithms to run on a particular computer architecture is an inherently creative activity. Quantum computers are not simply 'better' than classical ones. It is perfectly plausible that many problems (of course, we don't know which) won't benefit from quantum computing and thus classical computers may well remain superior for some tasks. The best we can say about quantum computers is: they might be better at solving particular problems but we don't know which. The advantage of quantum computers is highly problem-specific.

## WHENCE THE POWER OF QUANTUM COMPUTING?

But let us turn to those problems at which we know quantum computers excel, those problems for which we know we have more performant algorithms. There are further fascinating questions to ask: given that we have a more performant algorithm, what aspect of the quantum architecture is truly 'responsible' for its performance? The guiding thought here is that there must be a reason, located in the difference between classical and quantum computer architecture, located in the difference between the laws of classical bits and the laws of qubits, why such a performant algorithm is possible.

One suggestion is that it is the uniquely quantum phenomenon of superposition which is responsible for the quantum speedup. The argument goes, since the qubit exists in a real superposition of different states, any operation on that qubit as part of the computation operates 'simultaneously' on all parts of the superposition and thus you have a kind of parallel computation. It is generally considered uncontroversial that this kind of 'quantum parallelism' is at least partially responsible for quantum speedup. But there is also ongoing foundational research into the extent to which entanglement and quantum interference (which I have not discussed here) contributes to the quantum speedup in certain cases. No doubt the real answer to this question is that all quantum features are to some extent 'responsible'. But can't we do better than this? Might it be the case that some algorithms leverage superposition for the quantum speedup, while for others entanglement or interference play a more significant role?

## BLUFF YOUR WAY

To bluff your way in quantum computing, you should be able to:

1. Describe superposition and use it to explain the exponential growth in quantum state space.
2. Emphasize that quantum computers are faster for some specific problems, not universally.
3. Highlight that quantum computers aren't more capable than classical computers in terms of computability.
4. Stress that the quantum speedup is fundamentally about algorithm design, not hardware.

## FURTHER READING

- [Richard Feynman: Simulating Physics with Computers](https://s2.smu.edu/~mitch/class/5395/papers/feynman-quantum-1981.pdf)
- [Michael Cuffaro: Quantum Computing (SEP entry)](https://plato.stanford.edu/entries/qt-quantcomp/)
- [Scott Aaronson: Blog](https://scottaaronson.blog/)
- [Scott Aaronson: The Limits of Quantum Computers](https://www.scientificamerican.com/article/the-limits-of-quantum-computers/)