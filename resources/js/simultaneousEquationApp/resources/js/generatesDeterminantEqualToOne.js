// Function to calculate the modular multiplicative inverse using the Extended Euclidean Algorithm
function modInverse(a, m) {
  let m0 = m;
  let x0 = 0;
  let x1 = 1;

  while (a > 1) {
    const q = Math.floor(a / m);
    let t = m;

    m = a % m;
    a = t;

    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
  }

  if (x1 < 0) {
    x1 += m0;
  }

  return x1;
}

let coeffs, resulte, resultf, answer;

// Generate random values for the coefficients
function getRandomInt() {
  // Generate a random number between -10 and 10
  return Math.floor(Math.random() * 21) - 10;
}

// Function to generate coefficients with ad - bc = 1 and none of the coefficients being zero
function generateCoefficients() {
  let a, b, c, d;

  do {

    a = getRandomInt();
    b = getRandomInt();

    // Ensure that none of the coefficients are zero
    while (a === 0 || b === 0) {
      a = getRandomInt();
      b = getRandomInt();
    }

    // Calculate the modular multiplicative inverse of b modulo a
    c = modInverse(b, a);

    // Calculate the modular multiplicative inverse of a modulo b
    d = modInverse(a, b);
  } while (a * d - b * c !== 1 || c === 0 || d === 0);

  // Return the coefficients
  coeffs = { a, b, c, d };
  return coeffs;

}

// removes coefficient '1' and explicitly renders '+' sign
function removeNumberOneAndRenderPlusSign(coefficient, variable) {
  if (coefficient > 1) {
    return '+' + coefficient + variable;
  } else if (coefficient == 1) {
    return '+' + variable;
  } else if (coefficient == -1) {
    return '-' + variable;
  } else {
    return coefficient + variable;
  }
}

//removes coefficient '1' from in front of variable to adhere to mathematical convention
function removeNumberOne(coefficient, variable) {

  if (coefficient == 1) {
    return variable;
  } else if (coefficient == -1) {
    return '-' + variable;
  } else {
    return coefficient + variable;
  }
}

//Calculates the solution to the simultaneous equations using Cramer's rule.
function calculateSolution() {
  const D = coeffs.a * coeffs.d - coeffs.c * coeffs.b;
  const Dx = coeffs.d * resulte - coeffs.b * resultf;
  const Dy = coeffs.a * resultf - coeffs.c * resulte;
  return [Dx / D, Dy / D];

}

function displayEquations() {
  generateCoefficients();
  resulte = getRandomInt();
  resultf = getRandomInt();

  //Display new system of linear equations.
  document.getElementById("equation-container").innerHTML =
    '$$\\begin{align*}' +
    removeNumberOne(coeffs.a, 'x') + removeNumberOneAndRenderPlusSign(coeffs.b, 'y') + '&= ' + resulte + '\\\\' +
    removeNumberOne(coeffs.c, 'x') + removeNumberOneAndRenderPlusSign(coeffs.d, 'y') + '&= ' + resultf +
    '\\end{align*}$$';
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, "equation-container"]);
}

function displayAnswer() {
  answer = calculateSolution();
  document.getElementById("answer-container").innerHTML =
    '$$\\begin{align}' +
    'x &= ' + answer[0] + '\\\\' +
    'y &= ' + answer[1] +
    '\\end{align}$$';
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, "answer-container"]);
}

window.addEventListener("load", function () {
  // Trigger MathJax rendering
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, "equation-container"]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, "answer-container"]);
});