class Node { 
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
var root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);
root.right.right = new Node(3);

var isSymmetric = function(root) {
    return areSymmetric(root.left, root.right)
};
const areSymmetric = (root1, root2) => {
    if(!root1 && !root2) return true;
    else if (!root1 !=  !root2 || root1.val != root2.val) return false
    else 
        return areSymmetric(root1.left, root2.right) && areSymmetric(root1.right,root2.left)
}

console.log(isSymmetric(root))