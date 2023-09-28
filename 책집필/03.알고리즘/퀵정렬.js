function 퀵정렬 (입력배열) {
	// 정렬할 길이가 안되면 반환
	let 입력배열의길이 = 입력배열.length;
	if (입력배열의길이 <= 1) return 입력배열 
	
	// 첫 요소를 pivot으로 설정
	let 피벗값 = [입력배열.shift()]; 
	let 그룹하나 = [];
	let 그룹둘 = [];

	// partition step
	for (let i in 입력배열) { // 입력배열 내 요소들이 
		if (입력배열[i] < 피벗값) { // 피벗값보다 작다면 그룹 하나에
			그룹하나.push(입력배열[i]);
		} else { // 그렇지 않다면 그룹둘에 추가
			그룹둘.push(입력배열[i]);
		}
	}

	// 정렬과정 확인을 위한 코드
	console.log(`그룹하나: ${그룹하나}\n그룹둘: ${그룹둘}\n피벗값 : ${피벗값 }`)
	
	return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘))
}

console.log(퀵정렬([2,8,7,1,3,5,6,4]))