var isAnagram = function(s1, s2) {
    if(s1.length != s2.length) return false;
    let s1Cache = [...s1].reduce((obj,c) => obj[c] = obj[c] + 1 || 1 , {} );
    let s2Cache = [...s2].reduce((obj,c) => obj[c] = obj[c] + 1 || 1 , {} );
    for(let key in s1Cache) {
        if(s1Cache[key] !== s2Cache[key]) return false;
    }
    return true;
};

console.log(isAnagram('nameless', 'salesmen'))