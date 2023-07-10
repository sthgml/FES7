function solution(d, budget) {
    var answer = 0;  
    
    function total (arr){
        let totald = 0
        for( i in arr ){
            totald +=arr[i]
        }
        return totald;
    }    
    
    // 두개
    // function comb2 (arr){
    //     comb2 = [];
    //     for ( let i in arr ){ // i 가 인덱스고, arr[i]가 커렌트 엘리먼트자나, 
    //         for ( let j = i+1 ; j < arr.length ; j++ ){
    //             comb2.push([arr[i], arr[j]]);
    //         }
    //     }
    //     return comb2;
    // }
    
    //조합 구하는 함수
    //앞에는 고정, 뒤에는 돌려
    function combination (arr){
        let comb2 = [];
        arr.forEach((currentElement, index, array) => {
            for ( let i = 0 ; i < array.length ; i++ ){
                console.log(currentElement, array[index+i]);
            }
        })
        return comb2;
    }
    
    console.log(combination(d))
    
    var tod = total(d);
    console.log(tod)
    var gap = tod - budget;
    let sum = 0;
    if( gap <= 0 ){
        answer = d.length;
    }else{
        console.log(gap, "만큼이 부족합니다.");
        //n개의 조합의 합이 gap보다 큰 경우 중 n이 최소일 때 찾기
        
    }
    return answer;
}