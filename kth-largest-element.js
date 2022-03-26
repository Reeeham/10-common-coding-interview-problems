var findKthLargest = function(nums, k) {
    nums.sort( (a, b) => b - a );
    return nums[k-1];
};


console.log(findKthLargest([4,2,9,7,5,6,7,1,3],4))