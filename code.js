function depthFirstSearch(graph, startNode, targetNode) {
    if (startNode == targetNode)
        return startNode
    
    // tracks which nodes have been visited
	var visited = {};
	for (vertex in graph) {
		visited[vertex] = false;
	}
	visited[startNode] = true;
    var path = [];
    
    var flag = false;
    // starts at given node and recursively visits each connected node
	for (vertex in graph[startNode]) {
		if (visited[vertex] == false && !flag){
			path = nodeTraversal(path, visited, graph, vertex, targetNode);
            flag = path.includes(targetNode)
		}
	}
    path = [startNode].concat(path)
    return path;
}

// helper function to traverse graph recursively
function nodeTraversal(path, visited, graph, start, node) {
	visited[start] = true;
	if (start == node) {
        path.push(start)
        return path;
    }
	else {
        path.push(start)
		for (vertex of graph[start]) {
			if (visited[vertex] == false) {
                nodeTraversal(path, visited, graph, vertex, node);
            } 
		}
	}
    return path;
}
