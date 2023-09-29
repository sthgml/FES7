class ViewManager {
    constructor(textManager, {containerEl, inputTxt, btnSubmit}){
        if (textManager.constructor !== TextManager){
            throw new Error("textManager가 아님")
        }

        if(!containerEl || !inputTxt || !btnSubmit){
            throw new Error("option 요소 누락")
        }

        this.tm = textManager;
        this.containerEl = containerEl;
        this.inputTxt = inputTxt;
        btnSubmit.addEventListener('click', ()=> this.changeVal())
    }

    changeVal(){
        this.tm.setData(this.inputTxt.value);
        this.updateView()
    }

    updateView(){
        this.containerEl.textContent = this.tm.getData();
    }
}