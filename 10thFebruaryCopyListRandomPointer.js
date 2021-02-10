// Copy List with Random Pointer
//
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
//
//   Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
//
//   For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
//
//   Return the head of the copied linked list.
//
//   The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
//
//   val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
//   Your code will only be given the head of the original linked list.
//
//
//
//   Example
//
// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]


  // Definition for a Node.
  function Node(val, next, random) {
     this.val = val;
     this.next = next;
     this.random = random;
  }
 

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

  if(!head){
    return null;
  }
  let newHead, newNode, currentNode = head;
  let memory = new Map(), previousNode;
  while(currentNode){
    newNode = new Node(currentNode.val);
    memory.set(currentNode, newNode);
    
    if(previousNode){
      previousNode.next = newNode;
    }
    previousNode = newNode;
    currentNode = currentNode.next;
    if(!newHead){
      newHead = newNode;
    }
  }

  currentNode = head, newNode = newHead;
  while(currentNode){
    newNode.random = memory.get(currentNode.random);
    currentNode = currentNode.next;
    newNode = newNode.next;

  }
  return newHead;

};

let root = new Node(7);
let first = new Node(13);
let second = new Node(11);
let third = new Node(10);
let fourth = new Node(1);
root.next = first;
first.next = second;
first.random = root;
second.next = third;
second.random = fourth;
third.next = fourth;
third.random = second;
fourth.random = root;

console.log(`Tree is `,root);

console.log(`Copy Random list is `,copyRandomList(root));