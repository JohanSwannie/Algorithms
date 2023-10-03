//* Sum all the numbers in a range with 2 numbers given in or out of sequence

const sumThemAll = (arr) => {
  arr.sort();
  let min = arr[0];
  let max = arr[1];
  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};

alert(sumThemAll([21, 13]));
