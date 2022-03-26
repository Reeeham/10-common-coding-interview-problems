
var isValid = function(s) {
    const stack = [];
    for(p of s) {
         switch(p) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}')
                break;
            default:
                let topElement = stack.pop()
                if (p !== topElement) return false;       
        }
    }
    return stack.length == 0;
};

console.log(isValid('()((())(()))'));
