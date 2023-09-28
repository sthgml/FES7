class Heap {
    constructor() {
        // nodes[0] = null;
        this.nodes= [null];
    }

    insert(value) {
        // 가장 마지막 위치(가장 아래, 가장 오른쪽 노드)에 새로운 값이 추가
        this.nodes.push(value); 
        // 추가된 값의 위치, 마지막 인덱스부터 순회를 시작
        let crrIdx = this.nodes.length - 1;
        // 현재 노드의 인덱스를 crrIdx에, 부모 노드의 인덱스를 parIdx에 할당
        let parIdx = parseInt(crrIdx /2);

        // 현재 노드가 루트 노드가 아니고, 부모 노드의 값이 현재 노드의 값보다 작다면
        while (crrIdx > 1 && this.nodes[parIdx] < this.nodes[crrIdx ]) { 
            
            // 현재 노드와 부모 노드의 값을 서로 교환
            [this.nodes[parIdx], this.nodes[crrIdx]] = [
            this.nodes[crrIdx],
            this.nodes[parIdx]
            ]; 

            // 순회를 계속하기 위해 crrIdx와 parIdx의 값 변경
            crrIdx= parIdx;
            parIdx = parseInt(crrIdx/2);
        }
    }

    remove() {
        // 루트 노드의 값을 max에 저장
        const max = this.nodes[1]; 

        if (this.nodes.length <= 2) {
            this.nodes = [null];
        } else {
            // 배열의 가장 마지막 값을 루트 노드 자리에
            this.nodes[1] = this.nodes.pop(); 
        }

        // 루트 노드부터 시작하여 순회를 시작 (삽입과 반대)
        let crrIdx = 1; 
        let leftIdx = crrIdx * 2;
        let rightIdx = crrIdx * 2 + 1;

        if (!this.nodes[leftIdx]) { 
                // 힙(Heap)은 완전 이진 트리 형태이므로, 
                // 자식 노드가 더 이상 존재하지 않는다는 의미
            return max;
        }

        // 자식 노드 중 하나라도 현재 노드보다 크다면
        while (
            this.nodes[leftIdx] > this.nodes[crrIdx] || 
            this.nodes[rightIdx] > this.nodes[crrIdx]
        ) { 
            // 좌 우 자식 노드 중 더 큰 자식 노드nodes[maxIdx]와     
            const maxIdx=
            this.nodes[leftIdx] > this.nodes[rightIdx] ? leftIdx : rightIdx;

            // 현재 노드인 부모 노드 nodes[crrIdx]의 값을 교환
            [this.nodes[maxIdx], this.nodes[crrIdx]] = [
            this.nodes[crrIdx],
            this.nodes[maxIdx],
            ]; 

            // 순회를 계속하기 위해 crrIdx와 parIdx의 값을 변경
            crrIdx = maxIdx;
            leftIdx = crrIdx * 2;
            rightIdx = crrIdx* 2 + 1;
        }

        return max;
    }
}

// 클래스 선언 이후에 실행합니다.
// 삽입(insert) 메서드 예제 테스트
const myHeap = new Heap();

[90, 36, 17, 25, 26, 7, 1, 2, 3, 19].forEach(v=>{ myHeap.insert(v); })
console.log(myHeap.nodes); // > (11) [null, 90, 36, 17, 25, 26, 7, 1, 2, 3, 19]

myHeap.insert(48); 
console.log(myHeap.nodes); 
// > (12) [null, 90, 48, 17, 25, 36, 7, 1, 2, 3, 19, 26]


// 클래스 선언 이후에 실행합니다.
// 삭제(remove) 메서드 예제 테스트
const myHeap2 = new Heap();

[90, 36, 17, 25, 26, 7, 1, 2, 3, 19].forEach(v=>{ myHeap2.insert(v); })
console.log(myHeap2.nodes); // > (11) [null, 90, 36, 17, 25, 26, 7, 1, 2, 3, 19]

console.log(myHeap2.remove()); // > 90
console.log(myHeap2.nodes); // > (10) [null, 36, 26, 17, 25, 19, 7, 1, 2, 3]

// + 힙정렬
const myHeap3 = new Heap();

[90, 36, 17, 25, 26, 7, 1, 2, 3, 19].forEach(v=>{ myHeap3.insert(v); })
console.log(myHeap3.nodes); // > (11) [null, 90, 36, 17, 25, 26, 7, 1, 2, 3, 19]

const heapSort = [];
const heap3Length = myHeap3.nodes.length - 1; // null을 제외한 길이
for(let i = 0; i < heap3Length; i++){
    heapSort.push( myHeap3.remove());
}
console.log('힙정렬: ', heapSort);