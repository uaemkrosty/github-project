let count = 0;
function getRandomNumber(min, max) {
    min = Math.floor(Math.random() * (max - min + 1)) + min;
    return min;
}

let randomNum = getRandomNumber(1, 10);
console.log(randomNum);
