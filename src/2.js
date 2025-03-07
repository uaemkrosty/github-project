// Example 1: Random Number Between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Example 2: Random Letter of the Alphabet
function getRandomLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
}

// Example 3: Random Color
function getRandomColor() {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
}
