// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {

//   newArr.push([...arr]);

//     }
//     num--;
//     return newArr;
//   }

//   console.log(copyMachine([true, false, true], 2));

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
        // console.log([i, j]);
      }
    }
  }
};

console.log(twoSum([15, 7, 11, 2, 8, 1], 9));
// twoSum([15, 7, 11, 2, 8, 1], 9);
