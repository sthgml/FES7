// https://gmlwjd9405.github.io/2018/05/10/data-structure-heap.html
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 부모 노드의 인덱스를 반환하는 함수
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 노드의 인덱스를 반환하는 함수
  leftChildIndex(index) {
    return 2 * index + 1;
  }

  // 오른쪽 자식 노드의 인덱스를 반환하는 함수
  rightChildIndex(index) {
    return 2 * index + 2;
  }

  // 최대 힙 속성을 유지하도록 요소를 상향식으로 재배치하는 함수
  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = this.parentIndex(currentIndex);
      if (this.heap[currentIndex] <= this.heap[parentIndex]) {
        break; // 최대 힙 속성을 만족하면 종료
      }
      // 부모와 현재 노드를 교체
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  // 요소를 힙에 삽입하는 함수
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 최대 값을 반환하고 삭제하는 함수
  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    // 힙의 마지막 요소를 루트로 이동하고 배열에서 제거
    this.heap[0] = this.heap.pop();
    // 최대 힙 속성을 유지하도록 재배치
    this.heapifyDown(0);
    return max;
  }

  // 최대 힙 속성을 유지하도록 요소를 하향식으로 재배치하는 함수
  heapifyDown(index) {
    const leftIndex = this.leftChildIndex(index);
    const rightIndex = this.rightChildIndex(index);
    let largest = index;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] > this.heap[largest]
    ) {
      largest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] > this.heap[largest]
    ) {
      largest = rightIndex;
    }

    if (largest !== index) {
      // 최대 힙 속성을 위배하면 두 노드를 교체
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      // 재귀적으로 하향식으로 호출하여 속성을 계속 유지
      this.heapifyDown(largest);
    }
  }

  // 힙의 최대 값 (루트)를 반환하는 함수 (삭제하지 않고 반환)
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // 힙이 비어 있는지 확인하는 함수
  isEmpty() {
    return this.heap.length === 0;
  }

  // 힙의 크기를 반환하는 함수
  size() {
    return this.heap.length;
  }
}

// 테스트
const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(7);
maxHeap.insert(3);
maxHeap.insert(2);

console.log("Max Heap:", maxHeap); // (4)) [7, 5, 2, 3] length: 3
console.log("Max Value:", maxHeap.extractMax()); // 10
console.log("Max Heap After Extract Max:", maxHeap); // (4)) [7, 5, 2, 3] length: 3