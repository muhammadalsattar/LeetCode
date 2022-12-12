const plusOne = (digits: number[]): number[] => {
    for(let i = digits.length-1; i >= 0;){
        if(digits[i] === 9){
            digits[i] = 0
            i === 0 && digits.unshift(1)
            i--;
        } else {
            digits[i]++
            i = -1
        }
    }
    return digits;
};