const genArray = [];
const container = document.querySelector(".container");

const generatePtag = (innerContent) => {
  const pippie = document.createElement("p");
  pippie.innerHTML = innerContent;
  container.appendChild(pippie);
};

//* NUMBER 1
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

const sumAllLong = sumThemAll1([21, 13]);

generatePtag(
  `Sum all the numbers in a range with 2 numbers given in or out of sequence - Long way &#8594; ${sumAllLong}`
);

//* Sum all the numbers in a range with 2 numbers given in or out of sequence
//* Short way

const sumThemAll2 = (arr2) => {
  let total2 = 0;
  for (let i = Math.min(...arr2); i <= Math.max(...arr2); i++) {
    total2 += i;
  }
  return total2;
};

const sumAllShort = sumThemAll1([11, 14]);

generatePtag(
  `Sum all the numbers in a range with 2 numbers given in or out of sequence - Short way &#8594; ${sumAllShort}`
);

//* NUMBER 2
//* Return the symmetric differences between 2 arrays
//* Long way

const symDiff = (arr1, arr2) => {
  const togetherValues = new Set([...arr1, ...arr2]);
  const diffArr = [];
  for (element of togetherValues) {
    arr1.includes(element) && !arr2.includes(element)
      ? diffArr.push(element)
      : arr2.includes(element) && !arr1.includes(element)
      ? diffArr.push(element)
      : null;
  }
  return diffArr;
};

const firstArray = [1, 3, 5, 7, 18, 11, 14];
const secondArray = [2, 3, 18, 10, 7, 11];

const symDifference1 = symDiff(firstArray, secondArray);

generatePtag(
  `Return the symmetric differences between 2 arrays - Long way &#8594; ${symDifference1}`
);

//* Return the symmetric differences between 2 arrays
//* Short way

const arr1 = [9, 13, 3, 17, 10, 11, 29, 18];
const arr2 = [2, 3, 18, 10, 7, 11, 17];

const diff1 = arr1.filter((item) => !arr2.includes(item));
const diff2 = arr2.filter((item) => !arr1.includes(item));
const result = [...diff1, ...diff2];

generatePtag(
  `Return the symmetric differences between 2 arrays - Short way &#8594; ${result}`
);
