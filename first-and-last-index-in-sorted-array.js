
var searchRange = function(nums, target) {
    if(nums.length == 0) return [-1, -1];
    let start = -1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == target) {
            start = i;
            while(i+1 < nums.length && nums[i+1] == target) {
                i += 1;
            }
            return  [start, i];
        }
    }
    return [-1, -1]
};

console.log(searchRange([2,4,5,5,5,5,5,7,9,9], 5))