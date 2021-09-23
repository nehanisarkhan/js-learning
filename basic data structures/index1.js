function quickCheck(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(elem) != -1) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//Given an array of integers nums which is sorted in ascending order,
//and an integer target, write a function to search target in nums.
//If target exists, then return its index. Otherwise, return -1.

var search = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 12));
