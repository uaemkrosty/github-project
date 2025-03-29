function getRandomInt(max) {
  var max = Math.max(max);
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

// Example usage
console.log(getRandomInt(5)); // Outputs a random number between 0 and 4 (inclusive)
