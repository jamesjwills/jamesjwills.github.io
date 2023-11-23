function generateMatrix() {
  // Generate random values for the matrix
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const c = Math.floor(Math.random() * 10) + 1;
  const d = Math.floor(Math.random() * 10) + 1;

  // Calculate the determinant
  const determinant = a * d - b * c;

  // If the determinant is not 0, set the matrix
  if (determinant !== 0) {
    // Scale the matrix to have a determinant of 1
    const scale = 1 / determinant;
    const matrix = [
      [a * scale, b * scale],
      [c * scale, d * scale]
    ];

    return matrix;
  } else {
    // If the determinant is 0, generate a new matrix
    return generateMatrix();
  }
}

// Example usage
const randomMatrix = generateMatrix();
console.log("Random 2x2 Matrix with Determinant 1:");
console.log(randomMatrix);
