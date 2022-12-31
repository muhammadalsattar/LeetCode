const removeDuplicates = (nums: number[]): number => {
    let k = 0;
    for(let i: number = 0; i < nums.length;){
        if(nums[i] === nums[i+1]){
            nums.splice(i+1, 1)
        } else {
            i++;
            k++;
        }
    }
    return k;
};

removeDuplicates([0,1,1,2,3,3])