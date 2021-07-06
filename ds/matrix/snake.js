//print snake pattern in a 2D matrix
/*

*/
var arr = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [16, 17, 18, 19],
];

const getSnake = (arr) => {
  const tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < arr[i].length; j++) {
        tempArr.push(arr[i][j]);
      }
    } else {
      for (let j = arr[i].length - 1; j >= 0; j--) {
        tempArr.push(arr[i][j]);
      }
    }
  }
  return tempArr;
};
console.log(getSnake(arr));
