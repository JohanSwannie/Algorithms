//* Sum all the numbers in a range with 2 numbers given in or out of sequence
//* Long way

const sumThemAll1 = (arr1) => {
  arr1.sort();
  let min = arr1[0];
  let max = arr1[1];
  let total1 = 0;
  for (let i = min; i <= max; i++) {
    total1 += i;
  }
  return total1;
};

alert(sumThemAll1([21, 13]));

//* Sum all the numbers in a range with 2 numbers given in or out of sequence
//* Short way

const sumThemAll2 = (arr2) => {
  let total2 = 0;
  for (let i = Math.min(...arr2); i <= Math.max(...arr2); i++) {
    total2 += i;
  }
  return total2;
};

alert(sumThemAll2([1, 4]));
