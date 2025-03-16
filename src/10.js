function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const myArray = [];
for (let i = 0; i < 5; i++) {
  myArray.push(getRandomNumber(1, 10));
}
console.log(myArray);
