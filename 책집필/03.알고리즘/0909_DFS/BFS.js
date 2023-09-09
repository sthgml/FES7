graph = {
    'A' : ["C", "D", "E"],
    'B' : ["F", "E"],
    'C' : ["A"],
    'D' : ["A"],
    'E' : ["A", "B"],
    'F' : ["B"]
}

function dfs (graph, start) {
    let stack = [start];
    let visited = [];

    while (stack.length > 0){
        let currentNode = stack.pop();
        if( visited.includes(currentNode) !== true ){
            visited.push(currentNode);
            let sub = graph[currentNode].filter(v=> visited.includes(v) !== true )
            for (let i of sub) {
                stack.push(i)
            }
        }
    }
    return visited;
}   

function bfs (graph, start) {
    let queue = [start];
    let visited = [];

    while(queue.length > 0){
        let currentNode = queue.pop();

        if( visited.includes(currentNode) !== true ){
            visited.push(currentNode);
            let sub = graph[currentNode].filter( v => visited.includes(v) !== true );
            for(let i of sub){
                queue.unshift(i);
            }
        }
    }
    return visited;
}

console.log(dfs(graph, "E"));
console.log(bfs(graph, "E"))
