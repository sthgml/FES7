class TextManager {
    constructor () {
        this.value = {data: "hello lions!"};
    }
    // textManager의 인스턴스를 만들면 value라는 속성을 가질 것이고 그 속성의 초기값은 'hello lions!'가 되겠네요.

    getValue(){
        return this.value.data;
    }

    setValue(newValue){
        this.value.data = newValue;
    }
}
