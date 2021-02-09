// Convert BST to Greater Tree
//
// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.
//
//   As a reminder, a binary search tree is a tree that satisfies these constraints:
//
//   The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
//
//   Example
//
// Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {

  const treeTraversal = (currentNode, sum = 0) => {

    if (!root) {
      return root;
    }
    const treeTraversal = (currentNode, sum = 0) => {

      if (currentNode.right) {
        sum = treeTraversal(currentNode.right, sum);
      }
      currentNode.val = currentNode.val + sum;
      sum = currentNode.val;
      if (currentNode.left) {
        sum = treeTraversal(currentNode.left, sum);
      }
      return sum;

    };
    treeTraversal(root, 0);

    return root;
  }
};