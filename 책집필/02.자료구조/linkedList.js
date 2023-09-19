class Node {
	constructor (data) {
		this.value = data;
		this.next = null;
	}
}

class LinkedList{ //노드들로 구성된 링크드 리스트
	constructor(data){
		let init = new Node("init"); // value에 init을 갖는 새로운 노드를
		this.head = init; //헤드와
		this.tail = init; //꼬리에 넣어준다.
	
		this.currentNode = undefined; //this를 써 필드를 추가하는 것은 메모리 부담 큼
		this.dataNum = 0 ;
	}
	
	length (){
		return this.dataNum;
	}
	
	append (data) {
		let newNode = new Node(data);
		this.tail.next = newNode; // 꼬리에 연결시켜주고
		this.tail = newNode; //이제 얘가 꼬리야~ 알려주기
		this.dataNum += 1;		
	}

	// 전개구문처럼 펼쳐서 데이터를 볼 수 있는 메소드
	toString () {
		let currentNode = this.head;
		currentNode = currentNode.next;
		let s = '';
		for (let i = 0; i < this.dataNum; i++){
			s += `${currentNode.value}, `
			currentNode = currentNode.next;
		}
		return `[${s.slice(0, -2)}]`
	}

	// 진짜 배열 객체를 리턴하는 메소드
  get fullData () {
		let currentNode = this.head;
		currentNode = currentNode.next;
		let s = '';
		for (let i = 0; i < this.dataNum; i++){
			s += `${currentNode.value}, `
			currentNode = currentNode.next;
		}
		return JSON.parse(`[${s.slice(0, -2)}]`)
	}

	// insert 
	insert(index, data) {
		let currentNode = this.head; // head = {init, next}
		

		for (let i = 0; i < this.index; i++){ // data를 삽입할 위치까지 들어가요
			currentNode = currentNode.next; 
		}

		// new 노드 만들어서 데이터 넣고
		let newNode = new Node(data);

		newNode.next = currentNode.next;
		currentNode.next = newNode; 

		this.dataNum++;
	}
}

l = new LinkedList()
l.append(10)
l.append(20)
l.append(30)
l.append(100)
l.append(200)
l.append(300)
l.insert(2, 1000)