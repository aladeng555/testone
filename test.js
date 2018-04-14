
let arr = ['a','b','c','$','$','d','e','$','g','$','$','f','$','$']

// let i = 0;
function createTree (node) {
    let ch = arr.shift();
    console.log(ch);
    if (ch == '$' || !ch) {
        return;
    }
    node.data = ch;
    node.left = {};
    node.right = {};
    createTree(node.left);
    createTree(node.right);
    return node  
}

let node = {};
let c = createTree(node)

const util = require('util');

console.log(util.inspect(c, { showHidden: true, depth: null }));














