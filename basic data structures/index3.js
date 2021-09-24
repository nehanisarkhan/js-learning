let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],

  [[true, "deep", 6, 7, 1000, "method"]],

  [[["deeper", false, true, "spread", "array"]]],

  [[[["mutate", 1327.98, "splice", "slice", false]]]],

  [[[["deepest", 1.3849, 7, "8.4876", "arbitrary", "depth"]]]],
];

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not,
// return the index where it would be if it were inserted in order.

var searchInsert = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([1, 2, 3, 5, 6, 8], 7));
