const graph = {
    1: [2,3,4],
    2: []
}

const user_input = [1, 7];

const start=  parseInt(user_input[0], 10);
const end =  parseInt(user_input[1], 10);

let queue = [start];
let visited = [];

function sol (n, visited){
    let node = n[n.length-1];
    let length= 0;

    if(node == end){
        return visited.length;
    }

    if(visited.includes(node)){
        return visited.length;
    }else {
        visited.push(node);
    }
    
    let max = [];
    for(let next_node in graph[node]){
        n.push(graph[node][next_node]);
        max.push(length, sol(n,visited));
        length = Math.max.apply(null, max);

        queue.pop();
    }

    return length;
}