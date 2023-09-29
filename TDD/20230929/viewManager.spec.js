describe('textData를 받아다가 화면에 표시하는 함수',()=>{
    let containerEl = document.createElement("div");
    let inputTxt = document.createElement("input");
    let btnSubmit = document.createElement("button");
    let tm = new TextManager();

    let btnSubmitEmpty = null;
    let containerElEmpty = null;
    let inputTxtEmpty = null;
    let tmEmpty =null;


    it("textManager 누락 검사", ()=>{
        let actual = () => {
            return new ViewManager(tmEmpty, {containerEl, inputTxt, btnSubmit})
        }
        
        expect(actual).toThrowError();
    })

    it("option 누락 검사", ()=>{
        let actual = () => {
            return new ViewManager(tm, {containerElEmpty, inputTxtEmpty, btnSubmitEmpty})
        }
        
        expect(actual).toThrowError();
    })

    it("changeVal 작동 검사", ()=>{
        let viewManager = new ViewManager(tm, {containerEl, inputTxt, btnSubmit});

        spyOn(viewManager, "changeVal");
        btnSubmit.click();
        expect(viewManager.changeVal).toHaveBeenCalled();
    })

    it("updateView 작동 검사", ()=>{
        let viewManager = new ViewManager(tm, {containerEl, inputTxt, btnSubmit});

        spyOn(viewManager, "updateView");
        viewManager.changeVal();
        expect(viewManager.updateView).toHaveBeenCalled();
    })
})