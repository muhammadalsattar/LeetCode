const merge = (nums1: number[], m: number, nums2: number[], n: number): void =>{
    if(n === 0) return;
    for(let i = 0; i < n; i++){
        nums1.splice(m+i, 1, nums2[i])
    }
    nums1 = nums1.sort(function(a,b){return a - b})
};