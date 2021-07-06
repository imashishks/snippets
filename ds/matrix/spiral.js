const arr = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

/**
 * So the approach is to keep 4 variables, top ,right,bottom,left.. the printing goes like top-left to right, then update top++ , then print
 * right column from top to bottom and do right --, then print bottom row from right to left,and do bottom --, then print left column from bottom to  top and left ++
 * */

const printSpiral = (arr) => {
  //maintain variables
  let top = 0,
    right = arr[0].length - 1, //assuming all rows are of same length
    bottom = arr.length - 1,
    left = 0;
  for (let i = 0; i < arr.length; i++) {
    // print top row from left to right
    for (let j = left; j <= right; j++) {
      console.log(arr[top][j]);
    }
    top++;
    //print right column from top to bottom
    for (let j = top; j <= bottom; j++) {
      console.log(arr[j][right]);
    }
    right--;
    if (top <= bottom) {
      //print bottom row from right to left
      for (let j = right; j >= left; j--) {
        console.log(arr[bottom][j]);
      }
      bottom--;
    }

    if (left <= right) {
      //print left row from bottom to top
      for (let j = bottom; j >= top; j--) {
        console.log(arr[j][left]);
      }
      left++;
    }
  }
};

printSpiral(arr);
