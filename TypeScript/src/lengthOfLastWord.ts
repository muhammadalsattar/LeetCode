const lengthOfLastWord = (s: string): number => {
    let length = 0;
    for (let i = 0; i < s.length; i++){
        if(s[i] === " " && s[i+1] && s[i+1] !== " "){
            length = 0
        }
        if(s[i] !== " ") {
            length ++;
        }
    }
    return length;
};