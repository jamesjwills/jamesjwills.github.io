const fs = require('fs');
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Data to write to the file
const a = getRandomInt(1,9);
let arr = [];
arr = arr.push(a); 

// Specify the file path
const filePath = 'output.txt';

// Write to the file
fs.writeFile(filePath, arr, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data written to file successfully!');
  }
});
