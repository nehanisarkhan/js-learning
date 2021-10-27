function printManyTimes(str) {
  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  // Only change code above this line
}
printManyTimes("freeCodeCamp");

//to print arr1 at index n of arr2

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    n++;
  }
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
