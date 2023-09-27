class ViewManager {
    constructor(textManager, options){

        if(textManager.constructor !== TextManager){ // 전달받은 인스턴스가 TextManager의 인스턴스가 맞는지 .constructor 를 통해 확인할 수 있습니다.
            throw Error("textManager자리에 잘못된 입력값입니다.")
        }

        // options로 전달받을 세 가지 요소 중에 누락이 존재한다면
        if(!options.inpTxt || !options.viewerEl || !options.btnEl){
            throw Error("options의 요소 중 누락된 값이 존재합니다.")
        }

        this.textManager = textManager;

        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;

        options.btnEl.addEventListener("click", ()=>{
            this.changeValue();
        })
    }

    changeValue(){
        // input  에 사용자가 입력한 값을 가져와서 텍스트 매니저의 value를 설정합니다.
        this.textManager.setValue(this.inpTxt.value);
        this.updateView();
    }

    updateView(){
        this.viewerEl.textContent = this.textManager.getValue();
    }
}