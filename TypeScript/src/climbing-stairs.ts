const climbStairs = (n: number): number => {
    // recursion top-down solution
    if(n <= 1) return 1
    return climbStairs(n-1) + climbStairs(n-2)
};

const climbStairs2 = (n: number): number => {
    // dp bottom-up solution
    if(n <= 1) return 1
    let arr: number[] = []
    arr[0] = 1
    arr[1] = 1
    for(let i = 2; i <= n; i++){
        arr[i] = arr[i-1]+arr[i-2]
    }
    return arr[n]
};
