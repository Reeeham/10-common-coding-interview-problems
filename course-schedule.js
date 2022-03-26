/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let graph =  createGraph(prerequisites, numCourses);
    let visited = new Set(), visiting = new Set();
    
    for(let node in graph) { 
        if(detectCycle(graph, node, visited, visiting) === true) return false;
       }
    return true;
};
const detectCycle = (graph, node, visited, visiting) => {
    if(visited.has(node)) return false;
    if(visiting.has(node)) return true;
    
    visiting.add(node);
    for(let neighbor of graph[node]) {
        if(detectCycle(graph, neighbor, visited, visiting) === true) {
            return true;
        }
    }
    visiting.delete(node);
    visited.add(node);
    return false;
}
const createGraph = (edges, nodeCount) => {
    let graph = {};
    for(let i =0; i< nodeCount; i++) {
        graph[i] = [];
    }
    for(let [a,b] of edges) {
        graph[a].push(b);
    }
    return graph;
}