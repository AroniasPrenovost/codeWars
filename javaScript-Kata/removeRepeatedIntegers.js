// Given an array and a value, remove all instances 
// of that value in place and return the new length.

/* iterate through array front -> back */
var removeElement = function(nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
           nums.splice(i, 1);
        }
    }
};

/* iterate through array back -> front */
var removeElement = function(nums, val) {
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == val) {
           nums.splice(i, 1);
        }
    }
};