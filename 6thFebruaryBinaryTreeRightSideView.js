// Binary Tree Right Side View
//
// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you
// can see ordered from top to bottom.
//
//   Example
//
// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]



  // Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val);
      this.left = (left===undefined ? null : left);
      this.right = (right===undefined ? null : right);
  }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root){
    return [];
  }
  let output = [];
  root.level = 1;
  let queue = [root], currentNode;
  while (queue.length){
    currentNode = queue.shift();
    if(currentNode && currentNode.val != undefined && currentNode.val != null){
      if(currentNode.right) currentNode.right.level = currentNode.level+1;
      if(currentNode.left) currentNode.left.level = currentNode.level+1;
      queue.push(currentNode.right);
      queue.push(currentNode.left);
      if(output[currentNode.level-1] === undefined){
        output.push(currentNode.val);
      }
    }
  }
  return output;
};

let root = new TreeNode(6);
root.left = new TreeNode(1);
root.right = new TreeNode(null);
root.left.left = new TreeNode(null);
root.left.right = new TreeNode(3);
root.left.right.left = new TreeNode(2);
root.left.right.right = new TreeNode(5);
root.left.right.left.left = new TreeNode(null);
root.left.right.left.right = new TreeNode(null);
root.left.right.right.left = new TreeNode(4);



console.log(`Right Side View is `,rightSideView(root));