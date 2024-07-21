function solution(friends, gifts) {
  var answer = 0;
  
  // 선물 기록
  // 행렬? 가중치그래프 
  const friendsLen = friends.length;
  const giftLog = []
  for (let i = 0; i < friendsLen; i++) {
      const arr = [];
      for (let j = 0; j < friendsLen; j++) {
          arr.push(0);
      }
      giftLog.push(arr);
  }
  // console.log(giftLog);
  /*[ [ 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0 ] ]
   */

  gifts.forEach(gift=>{
      const [sender, receiver] = gift.split(" ");
      const senderIdx = friends.findIndex(v=>v===sender);
      const receiverIdx = friends.findIndex(v=>v===receiver);
      giftLog[senderIdx][receiverIdx] += 1;
  });
  // console.log(giftLog);
  /* [
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 1, 1, 0, 1, 1 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 0, 0 ]
  ] */

  // 비교
  const giftCnt = friends.map((v)=> {
      return {
          name: v,
          nextGiftCnt: 0
      }
  });
  // console.log(giftCnt);
  /*[
  { name: 'a', nextGiftCnt: 0 },
  { name: 'b', nextGiftCnt: 0 },
  { name: 'c', nextGiftCnt: 0 }
  ] */

  giftCnt.forEach((_, i, arr) => {
      for (let j = i+1; j < friendsLen; j++) {
          // console.log("- - -- - --")
          // console.log(arr[i], giftLog[i]);
          // console.log(arr[j], giftLog[j]);
          switch (true) {
              case (giftLog[i][j] < giftLog[j][i]):
                  arr[j].nextGiftCnt += 1;
                  break;
              case (giftLog[j][i] < giftLog[i][j]):
                  arr[i].nextGiftCnt += 1;
                  break;
              case (giftLog[j][i] === giftLog[i][j]): // 여기서 이제 선물지수 비교

                  let senderTotal = giftLog[i].reduce((a, c) => a+c);
                  let receiverTotal = giftLog[j].reduce((a, c) => a+c);
                  
                  // 받은 만큼 빼야됨
                  let senderMinus = 0;
                  let receiverMinus = 0;
                  giftLog.forEach(v=>{
                      senderMinus -= v[i];
                      receiverMinus -= v[j];
                  });

                  senderTotal += senderMinus;
                  receiverTotal += receiverMinus;

                  if (senderTotal < receiverTotal) {
                      // console.log('sender승')
                      arr[j].nextGiftCnt += 1;
                  } else if (senderTotal > receiverTotal) {
                      // console.log('리시버승')
                      arr[i].nextGiftCnt += 1;
                  } else if (senderTotal === receiverTotal) {
                      // console.log('동점')
                      break;
                  }
                  break;
          }  
      }
      arr[i].need = false;
  })

  answer = giftCnt.map(v=>v.nextGiftCnt);
  return Math.max(...answer);
}