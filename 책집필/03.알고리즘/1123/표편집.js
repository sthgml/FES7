
function solution(n, k, cmd) {
  var answer = '';
  const originalArray = Array(n).fill({});
  originalArray.forEach((v,i,arr)=>{
      arr[i] = {
          originalIdx: i,
          modifiedIdx: i,
          isDeleted:false,
      }
  })
  // console.log(originalArray);
      
  let currentIdx = k;
  let moveCnt = 0;
  let deleted = [];
  let lastIdx = n-1;
  cmd.forEach(command => {
      console.log(command, "-------------------------------");
      switch (true) {
          case command.includes("D"):
              moveCnt = Number(command.slice(1));
              currentIdx += moveCnt;
              console.log("이동후 currentIdx =", currentIdx);
              console.log(originalArray);
              
              break;
          case command.includes("U"):
              moveCnt = Number(command.slice(1));
              currentIdx -= moveCnt;
              console.log("이동후 currentIdx =", currentIdx);
              console.log(originalArray);
              
              break;
          case command === "C":
              // 삭제하려는 요소의 Idx
              const targetIdx = originalArray
                  .findIndex(v => v.modifiedIdx === currentIdx && v.isDeleted === false);
              if (originalArray[targetIdx]) {
                  originalArray[targetIdx].isDeleted = true;
              } else {
                  console.log("오류!!")
              }
              deleted.push(originalArray[targetIdx]);
              // 현재 Idx 가 마지막 Idx라면
              if (currentIdx === lastIdx ) {
                  currentIdx -= 1; 
              }
              
              // targetIdx 뒤의 요소들의 modifiedIdx를 수정
              originalArray.forEach((v, _, arr)=>{
                  if ( v.modifiedIdx > targetIdx ) {
                      v.modifiedIdx -= 1;
                  }
              })
              
              // 삭제완료되면 lastIdx하나 줄이기
              lastIdx -= 1;
              console.log("삭제완료", originalArray);
              
              break;
          case command === "Z":
              const undo = deleted.pop();
              const undoTargetIdx = undo.modifiedIdx;
              originalArray[undo.originalIdx].isDeleted = false;
              
              // 현재 위치보다 앞에서 언두되면 현재 위치를 +1
              if ( currentIdx >= undoTargetIdx ) {
                  currentIdx += 1;
              }
              
              // targetIdx 뒤의 요소들의 modifiedIdx를 수정
              originalArray.forEach((v, _, arr)=>{
                  if ( v.modifiedIdx >= undoTargetIdx && v.originalIdx !== undo.modifiedIdx) {
                      v.modifiedIdx += 1;
                  }
              })
              
              // 취소완료되면 lastIdx하나 늘리기
              lastIdx += 1;
              console.log("실행취소",undo, originalArray);
              
              break;
          default:
              break;
      }
  })
  
  answer = originalArray.map(v=> v.isDeleted ? "X" : "O").join("");
  return answer;
}


class Node {
    constructor (i, prevNode) {
        this.index = i;
        this.prev = prevNode ? prevNode : null;
        this.next = null;
    }
}

function solution (n, k, cmd) {
    let answer = Array(n).fill("O");
    
    const root = new Node(0);
    let currentNode = root;
    let prevNode = root;
    
    // 링크드리스트 생성
    for (let i = 1; i < n; i++) {
        // 각 노드는 인덱스 번호와 앞전 노드를 제공받고
        const newNode = new Node(i, prevNode);
        prevNode.next = newNode; // 앞전 노드의 next 파람에는 현재 노드를 넣어줌
        prevNode = newNode; // 지금 노드를 앞전 노드로 설정해주면 다음번 생기는 노드의 앞전 노드로 들어갈 수 있음
        // 지금 인덱스가 k번이라면 currentNode에 넣어줌..
        if (i === k) {
            currentNode = newNode;
        }
    }
    // console.log(currentNode.index);
    
    const deleted = [];
    cmd.forEach(command => {
        // console.log("command:", command, "------------")
        const moveCnt = Number(command.split(" ")[1]);
        let i = 0;
        let prev;
        let next;
        
        switch (true) {
            case command.includes("U"):
                while (i < moveCnt && currentNode.prev) {
                    currentNode = currentNode.prev;
                    i++;
                }
                // console.log("업", currentNode.index);
                break;
                
            case command.includes("D"):
                while (i < moveCnt && currentNode.next) {
                    currentNode = currentNode.next;
                    i++;
                }
                // console.log("다운", currentNode.index);
                break;
                
            case command === "C":
                deleted.push(currentNode);
                prev = currentNode.prev;
                next = currentNode.next;
                if (prev && next) {
                    prev.next = next;
                    next.prev = prev;
                    currentNode = next;
                } else if (prev) {
                    prev.next = null;
                    currentNode = prev;
                } else if (next) {
                    next.prev = null;
                    currentNode = next;
                }
                break;
                
            case command === "Z":
                const node = deleted.pop();
                prev = node.prev;
                next = node.next;
                
                if (prev) {
                    prev.next = node;
                } else if (next) {
                    next.prev = node;
                }
                break;
                
            default:
                break;
        }
    })
    
    // 삭제된 애들만 가지고 X 넣어주면 끗!~
    deleted.forEach((node) => {
        answer[node.index] = "X";
    })
    return answer.join("");
}


function solution(n, k, cmd) {
    class Node {
        constructor (i, prevNode) {
        this.index = i;
        this.prev = prevNode;
        this.next;
    }}
    
    const root = new Node(0);
    let prevNode = root;
    let currentNode;
    
    for (let i = 1; i < n; i++) {
        const node = new Node(i, prevNode);
        prevNode.next = node;
        prevNode = node;
        
        if (i === k) {
            currentNode = node;
        }
    }
    
    const deleted = [];
    cmd.forEach(el => {
        const [command, moveCount] = el.split(" ");
        let i = 0;
        // console.log(el), "--------------------------";
        switch (command) {
            case "U" :
                while (i < moveCount && currentNode.prev ) {
                    currentNode = currentNode.prev;
                    i++;
                }
                // console.log("up => currentIdx", currentIdx);
                break;
                
            case "D" :
                while (i < moveCount && currentNode.next) {
                    currentNode = currentNode.next;
                    i++;
                }
                // console.log("down => currentIdx", currentIdx);
                break;
            
            case "C" :
                // console.log("current: ", currentIdx, " in ", linkedList[currentIdx]);
                deleted.push(currentNode);
                
                if (currentNode.prev
                    && currentNode.next) { // 중간 요소면
                    currentNode.next.prev = currentNode.prev; // 뒷요소의 앞 = 앞앞
                    currentNode.prev.next = currentNode.next; // 앞요소의 뒤 = 뒤뒤
                    currentNode = currentNode.next; 
                } else if (currentNode.next) { // 맨 앞이면
                    currentNode.next.prev = null; // 뒷요소의 앞 = null = 맨앞이다
                    currentNode = currentNode.next;
                } else if (currentNode.prev) { // 맨 끝이면
                    currentNode.prev.next = null;
                    currentNode = currentNode.prev;
                }
                // console.log(linkedList)

                break;
            case "Z":
                // console.log("current: ", currentIdx, " in ", linkedList[currentIdx]);
                const undo = deleted.pop();
                
                if (undo.prev && undo.next) { // 중간요소면
                    undo.prev.next = undo; // 앞요소 뒤자리 나야;
                    undo.next.prev = undo; // 뒷요소 앞자리 나야;
                } else if (undo.next) { // 맨앞이면
                    undo.next.prev = undo;
                } else if (undo.prev) { // 맨 뒤면
                    undo.prev.next = undo;
                }
                
                // console.log(linkedList)
        }
    })
    
    let answer = Array(n).fill("O");
    deleted.forEach(v=>{
        answer[v.index] = "X";
    })
    return answer.join("");
}