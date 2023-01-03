const mySqrt = (x: number): number => {
    let i = 1;
    let result = 0
    while (x - i >= 0) {
        x = x - i;
        i += 2;
        result++
    }
    return result;
};