// - 전위 : 자신 왼쪽 오른쪽
// - 중위 : 왼쪽 자신 오른쪽
// - 후위 : 왼쪽 오른쪽 자신
class Node {
	constructor(data){
		this.data = data;
		
		this.left = null;
		this.left = null;
	}
}

class Tree {
	constructor (data) {
		let init = new Node(data);
		this.root = init;
		this.dataNum = 0;
	}

	length () {
		return this.dataNum;
	}
		
	insert (data) {
		let newNode = new Node(data);
		let current = this.root;
		while (current) {
			if (data === current.data){
				return;
			}
			if (data < current.data) { //작으면 왼쪽
				if(!current.left){ // 비었으면 넣고
					current.left = newNode;
					this.dataNum++;
					return;
				}
				current = current.left //안 비었으면 한번 더 뎁스!
			}
			if (data > current.data) {
				if(!current.right){
					current.right= newNode;
					this.dataNum++;
					return;
				}
				current = current.right
			}
		}
	}

	DFS () { // 깊이 우선 탐색
		let 결과값 = [];
		let stack = [this.root];

		while (stack.length !== 0) {
			let current = stack.pop();
			if(current.right) {
				stack.push(current.right);
			}
			if(current.left) {
				stack.push(current.left);
			}
			결과값.push(current.data);
		}
		return 결과값
	}

	BFS () {
		let 결과값 = [];
		let queue= [this.root];

		while (queue.length !== 0) {
			let current = queue.shift();
			if(current.right) {
				queue.push(current.right);
			}
			if(current.left) {
				queue.push(current.left);
			}
			결과값.push(current.data);
		}
		return 결과값
	}
}

let t = new Tree(5);
t.insert(9)
t.insert(5)
t.insert(6)
t.insert(8)
t.insert(10)
t.insert(12)