function calculateAverage(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / numbers.length;
}

const result = calculateAverage([1, 2, 3, 4, 5]);
console.log(result);
