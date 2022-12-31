const isValid = (s: string): boolean => {
    if(s.length < 2){
        return false
    }
    let valid: boolean = false
    let opened: string[] = [];
    let current: string | null = null;
    let prev 
    for(let c of s){
        if(c === '('){
            opened.push('(')
        } else if(c === ')' && opened[opened.length-1] === '('){
            opened.pop()
        } else if(c === ')' && opened.findIndex(e=>e === '(') === -1){
            return false
        }
        if(c === '['){
            opened.push('[')
        } else if(c === ']' && opened[opened.length-1] === '['){
            opened.pop()
        } else if(c === ']' && opened.findIndex(e=>e === '[') === -1){
            return false
        }
        if(c === '{'){
            opened.push('{')
        } else if(c === '}' && opened[opened.length-1] === '{'){
            opened.pop()
        } else if(c === '}' && opened.findIndex(e=>e === '{') === -1){
            return false
        }
    }
    opened.length === 0? valid = true: valid = false
    return valid;
}

isValid('()[]{}')
isValid('()')
isValid('[)')
isValid('({})')