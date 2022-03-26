const generateParentheses = (n) => {
    let combs = [];
    rec(2*n, 0, [], combs)
    return combs;
}
const rec = (n, diff = 0, comb, combs) => {

    if(diff  < 0 || diff > n) return;
    else if(n == 0){
        if(diff == 0)
          combs.push(comb.join(''))
    }else {
        comb.push('(');
        rec(n-1, diff+1, comb, combs);
        comb.pop();
        comb.push(')');
        rec(n-1, diff - 1, comb, combs)
        comb.pop();
    }
}

console.log(generateParentheses(6))