var moveZeroes = function(nums) {
    // O(n) Time Complexity
	// 2 Pointers
    let left = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]!==0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        }
    }
	return nums;
};