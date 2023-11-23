function generateEquations() {
  // Generate random coefficients and constants
  const a1 = getRandomInt(-10, 10);
  const b1 = getRandomInt(-10, 10);
  const c1 = getRandomInt(-10, 10);

  const a2 = getRandomInt(-10, 10);
  const b2 = getRandomInt(-10, 10);
  const c2 = getRandomInt(-10, 10);

  // Build the equations as strings
  const equation1 = `${a1}x + ${b1}y = ${c1}`;
  const equation2 = `${a2}x + ${b2}y = ${c2}`;

  // Display the generated equations
  console.log("Equation 1:", equation1);
  console.log("Equation 2:", equation2);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
generateEquations();
