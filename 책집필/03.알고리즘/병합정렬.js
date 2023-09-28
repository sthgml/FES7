function 병합정렬 (입력배열) {
	let 입력배열의길이 = 입력배열.length;
    if (입력배열의길이 <= 1) return 입력배열 

    // 분할
    let 중간값 = parseInt(입력배열의길이/2);
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
    let 그룹둘 = 병합정렬(입력배열.slice(중간값));
    
    // 정복
    let 결과값 = [];
    while (그룹하나.length !== 0 && 그룹둘.length !== 0){ 
        // 원소가 남아있을 때 
        // 원소가 다 떨어지면 뒤에꺼 이어붙이면 됨
        
        //작은걸 결과값에 push
        if (그룹하나[0] < 그룹둘[0]){
            결과값.push(그룹하나.shift()); 
        } else {
            결과값.push(그룹둘.shift());
        }
    }
    
    while (그룹하나.length !== 0){
        // 원소가 그룹하나에만 있을 때
        결과값.push(그룹하나.shift());
    }

    while (그룹둘.length !== 0){
        // 원소가 그룹하나에만 있을 때
        결과값.push(그룹둘.shift())
    }

    return 결과값
}

console.log(병합정렬([2,8,7,1,3,5,6,4]))
// > (8) [1, 2, 3, 4, 5, 6, 7, 8]