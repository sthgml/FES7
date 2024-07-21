function solution(places) {
  var answer = [];
  const sitted = [];
  
  // 검사
  function inspect ([i, j], room) {
      let result = true;
      const inspectionArea = [[0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1], [-1,0], [-1,1], [0,2], [0,-2], [2,0], [-2,0]];
      
      for(let v of inspectionArea) {
          const dx = v[0];
          const dy = v[1];
          if (i+dx > 0 && i+dx < 5 && j+dy > 0 && j+dy < 5){
              if (room[i+dx][j+dy] === "P" ) { //거리 내에 앉아있고
                  
                  if (Math.abs(dx) + Math.abs(dy) === 1){
                      result = false;
                      break;
                  }
                  
                  if (!isPartitionBetween([i,j], [i+dx, j+dy], room)){
                      // 그 사이에 파티션이 없다면
                      result = false;
                      break;
                  }
              }
          }
      }
      return result;
  }
  
  //파티션이 있는지
  function isPartitionBetween ([r1, c1], [r2, c2], room) {
      if (r1 === r2 && Math.abs(c1-c2) === 2) {
          // 수평선 상에 위치
          const midC = (c1+c2) / 2;
          if (room[r1][midC] === "X") {
              return true;
          }
      } else if (c1 === c2 && Math.abs(r1-r2) === 2) {
          // 수직선 상에 위치
          const midR = (r1+r2) / 2;
          if(room[midR][c1] === "X") {
              return true;
          }
      } else if (Math.abs(r1-r2) === 1 && Math.abs(c1-c2) === 1) {
          // 대각선 상에 위치할 때
          if(room[r1][c2] === "X" && room[r2][c1] === "X") {
              return true;
          }
      }
  }
  
  places.forEach(room => {
      for(let i = 0; i < 5; i++){
          for(let j = 0; j < 5; j++){
              if (room[i][j] === 'P' // 사람이 앉아있으면 
                  && !inspect([i,j], room)) { // 그 주변을 검사
                  answer.push(0); // 검사에서 true가 뜨면 어긴 것을 발견 한 것
                  return;
              }
          }
      }
      answer.push(1);
  })
  
  return answer;
}

//
function solution(places) {
    var answer = [];
    const sitted = [];
    
    // 검사
    function inspect ([i, j], room) {
        let result = true;
        const inspectionArea = [[0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1], [-1,0], [-1,1], [0,2], [0,-2], [2,0], [-2,0]];
        
        for(let v of inspectionArea) {
            const dx = v[0];
            const dy = v[1];
            if (i+dx < 0 || i+dx >= 5 || j+dy < 0 || j+dy >= 5) continue;
            if (room[i+dx][j+dy] === "P" ) { //거리 내에 앉아있고
                    
                    if (Math.abs(dx) + Math.abs(dy) === 1){
                        result = false;
                        break;
                    }
                    
                    if (!isPartitionBetween([i,j], [i+dx, j+dy], room)){
                        // 그 사이에 파티션이 없다면
                        result = false;
                        break;
                    }
                }
        }
        return result;
    }
    
    //파티션이 있는지
    function isPartitionBetween ([r1, c1], [r2, c2], room) {
        if (r1 === r2 && Math.abs(c1-c2) === 2) {
            // 수평선 상에 위치
            const midC = (c1+c2) / 2;
            if (room[r1][midC] === "X") {
                return true;
            }
        } else if (c1 === c2 && Math.abs(r1-r2) === 2) {
            // 수직선 상에 위치
            const midR = (r1+r2) / 2;
            if(room[midR][c1] === "X") {
                return true;
            }
        } else if (Math.abs(r1-r2) === 1 && Math.abs(c1-c2) === 1) {
            // 대각선 상에 위치할 때
            if(room[r1][c2] === "X" && room[r2][c1] === "X") {
                return true;
            }
        }
    }
    
    places.forEach(room => {
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if (room[i][j] === 'P' // 사람이 앉아있으면 
                    && !inspect([i,j], room)) { // 그 주변을 검사
                    answer.push(0); // 검사에서 true가 뜨면 어긴 것을 발견 한 것
                    return;
                }
            }
        }
        answer.push(1);
    })
    
    return answer;
  }
  