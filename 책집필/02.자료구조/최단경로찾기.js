let graph = {
    'A' : ['B', 'C'],
    'B' : ['A', 'D', 'E'],
    'C' : ['A', 'F' ],
    'D' : ['B' ],
    'E' : ['B', 'F' ],
    'F' : ['C', 'E' ]
};

//let user_input = prompt('입력해주세요').split(' ') // 프롬프트로 받은문자열을 쪼개서 배열로 저장했다고 치고
let user_input = ['A', 'F'];
let [start, end] = user_input;

// 방문해야될 배열 - 큐
// 방문할 요소 = 커렌트에 저장 = 큐에서 shift로 빼낸 요소 (맨 앞 요소)
// 방문한 요소를 방문했던 요소 배열에 저장 + 연결된 배열([방문했던 요소] 키에 저장된 값)은 큐에 넣어줌
let queue = [start];
let visited = [];
let count = -1; // 순회횟수 = 한 노드에 연결된 queue를 모두 탐색한 횟수

while(queue.length){
    count++;
    let size = queue.length
    console.log(size)
    
    for(let i = 0; i < size; i++){
        let currentNode = queue.shift();
        if(currentNode === end){
            console.log('count', count)
            break;
        }

        visited.push(currentNode)
        for(let i of graph[currentNode]){
            if(!visited.includes(i) && !queue.includes(i)){
                queue.push(i)
            }
        }
        console.log(`currentNode: ${currentNode}, visited: ${visited}, queue: ${queue}`)
    }

    
}
    

