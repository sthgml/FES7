// Least Recently Used - 가장 오랫동안 사용되지 않았던 페이지를 제거하는 알고리즘
// 한 번 더 호출된 페이지는 원래는 1초만 추가하고 넘겨줬는데, 
// 스택에서 가장 마지막 위치로 옮겨주면 가장 후순위로 넘겨주는 것!
function solution (frame, page) {
	let runTime = 0;
	let temp = []; // 큐
	
	if (frame === 0) { //저장할 공간 없음
		runTime = page.length * 6;
		return runTime;
	}
		
	for (let i of page) {
		if (temp.includes(i)) { //이미 페이지가 표시되었다. = 중복 호출이다. = 자주 쓰이는 페이지다 
			temp.splice(temp.indexOf(i), 1) // 페이지가 푸시되는 순위를 젤 뒤로 옮겨줘!
			temp.push(i)
		} else { //포함되지 않았다. 추가 or 교체가 일어남
			if (temp.length < frame) { //아직 저장공간이 남았다. 
				temp.push(i); //그냥 넣어줌 > 페이지 교체가 일어나지 않음
			} else { //저장 공간 없으면 
				temp.shift(); //맨 앞을 빼주고,
				temp.push(i); //페이지 교체 해줌
			}
			runTime += 6;
		}
	}
	
	return runTime;
}

const f = 3; // 최대로 들어갈 수 있는 frame 수
const page = "BCBAEBCE".split(""); // 들어갈 페이지 대기열
solution(f, page)
