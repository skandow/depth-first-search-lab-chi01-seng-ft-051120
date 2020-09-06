function depthFirstSearch(rootNode, vertices, edges) {
    let stack = []
    let answer = []
    stack.push(rootNode)
    answer.push(rootNode)
    while (stack.length !== 0) {
        let node = stack.pop()
        if (node.discovered === null) {
            node.discovered = true
            let adjEdges = adjacentEdges(node, vertices, edges)
            adjEdges.forEach(edge => {
                stack.push(edge)
                answer.push(edge)
            }) 
        }
    }
    return answer
}

function adjacentEdges(node, vertices, edges) {
    let adjacents = []
    edges.forEach(edge => {
        if (edge[0] === node.name) {
            let v = vertices.find(vertex => vertex.name === edge[1])
            if (!v.discovered) {
                adjacents.push(v)
            }
        } else if (edge[1] === node.name) {
            let v = vertices.find(vertex => vertex.name === edge[0])
            if (!v.discovered) {
                adjacents.push(v)
            }
        }
    })
    return adjacents
}