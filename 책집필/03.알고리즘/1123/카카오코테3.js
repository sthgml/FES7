[[1, 2, 3, 4, 5, 6], [3, 3, 3, 3, 4, 4], [1, 3, 3, 4, 4, 4], [1, 1, 4, 4, 5, 5]] [1, 4]
[[1, 2, 3, 4, 5, 6], [2, 2, 4, 4, 6, 6]] [2]
[[40, 41, 42, 43, 44, 45], [43, 43, 42, 42, 41, 41], [1, 1, 80, 80, 80, 80], [70, 70, 1, 1, 70, 70]]  [1, 3]

function solution(dice) {
  var answer = [];

  const getNewDiceComb = (diceComb, index) => {
      if (diceComb[0].length >= dice.length/2) return diceComb;

      const newDiceComb = [];
      
      for (let i = index; i < diceComb.length; i++ ) {
          for (let j = i+1; j < diceComb.length; j++) {
              if (diceComb[i].includes(j)) continue;
              const temp = [...diceComb[i], j];
              newDiceComb.push(temp);
          }
      }

      return getNewDiceComb(newDiceComb, index+1);
  }

  const diceNumbers = dice.map((_, i)=> [i]);
  const diceComb = getNewDiceComb(diceNumbers, 0);
  // console.log(diceComb);
  /* [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ] */

  const myTotalList = [];
  diceComb.forEach(comb => {
      const myDice = dice.filter((_, i) => comb.includes(i));
      // console.log(myDice);

      // 나올수 있는 모든 눈의 합 구하기
      const getNewTotal = (nthTotal, index) => {
          if (index > myDice.length-1) return nthTotal;

          const newTotal = [];
          nthTotal.forEach(v=>{
              myDice[index].forEach(num =>{
                  newTotal.push(v+num);
              });
          });

          return getNewTotal(newTotal, index+1);
      }
      const myTotal = getNewTotal(myDice[0], 1);
      myTotalList.push(myTotal.sort((a,b)=>b-a));
      // console.log(myTotal);
  })
  
  const combResult = [];
  const result = [];
  myTotalList.forEach((myTotal, i, arr)=>{
      myTotalList.forEach((yourTotal, j, arr)=>{
          if (j <= i) return;
          let thisResult = 0;
          combResult.push([i,j])
          myTotal.forEach(m=> {
              thisResult += yourTotal.filter(y => y < m).length;
          });
          result.push(thisResult);
      })
  })
  console.log(result);
  const max = Math.max(...result);
  answer = combResult[result.indexOf(max)];
  return answer;
}