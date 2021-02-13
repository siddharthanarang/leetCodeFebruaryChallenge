// Is Graph Bipartite?
//   Given an undirected graph, return true if and only if it is bipartite.
//
//   Recall that a graph is bipartite if we can split its set of nodes into two independent subsets A and B, such that
// every edge in the graph has one node in A and another node in B.
//
//   The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j
// exists. Each node is an integer between 0 and graph.length - 1. There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.
//
// Input: graph = [[1,3],[0,2],[1,3],[0,2]]
// Output: true
// Explanation: We can divide the vertices into two groups: {0, 2} and {1, 3}.


/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  
  // let output;
  //
  // let helperFunction = (currentIndex =0, subsetA = {}, subsetB = {},  output = false) => {
  //   if(currentIndex === graph.length){
  //     return true;
  //   }
  //   if(!subsetA[currentIndex] && !subsetB[currentIndex]){
  //     subsetA[currentIndex] = true;
  //     output = helperFunction(currentIndex, JSON.parse(JSON.stringify(subsetA)), JSON.parse(JSON.stringify(subsetB)));
  //     if(output) {
  //       return output;
  //     }
  //     else{
  //       delete subsetA[currentIndex];
  //       subsetB[currentIndex] = true;
  //       output = helperFunction(currentIndex, JSON.parse(JSON.stringify(subsetA)), JSON.parse(JSON.stringify(subsetB)));
  //       return output;
  //     }
  //
  //   }
  //   else if( subsetA[currentIndex]){
  //     for(let j=0;j<graph[currentIndex].length;j++){
  //       if(subsetA[graph[currentIndex][j]]){
  //         return false;
  //       }
  //       subsetB[graph[currentIndex][j]] = true;
  //     }
  //     subsetA[currentIndex] = true;
  //     output = helperFunction(currentIndex+1, subsetA, subsetB);
  //     return output;
  //   }
  //   else if(subsetB[currentIndex]){
  //     for(let j=0;j<graph[currentIndex].length;j++){
  //       if(subsetB[graph[currentIndex][j]]){
  //         return false;
  //       }
  //       subsetA[graph[currentIndex][j]] = true;
  //     }
  //     output = helperFunction(currentIndex+1, subsetA, subsetB);
  //     return output;
  //   }
  // };
  // output = helperFunction();
  // return output;
  const colors = new Map();

  for (let u = 0; u < graph.length; u++) {
    if (!dfs(graph, colors, u, 0)) {
      return false;
    }
  }

  return true;
};

const dfs = (graph, colors, u, color) => {
  if (!colors.has(u)) {
    colors.set(u, color);

    for (const v of graph[u]) {
      if (!dfs(graph, colors, v, 1 - color) || colors.get(v) === color) {
        return false;
      }
    }
  }

  return true;
};
// console.log(`Is Graph Bipartite `,isBipartite([[1],[0,3],[3],[1,2]]));
console.log(`Is Graph Bipartite `,isBipartite([[3],[2,4],[1],[0,4],[1,3]]));