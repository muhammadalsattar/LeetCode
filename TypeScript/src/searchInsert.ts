const searchInsert = (nums: number[], target: number): number => {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i
        } else if (nums[i] > target){
            return i
        } else if(nums[i+1] > target){
            return i+1
        }
    }
    return nums.length;
};