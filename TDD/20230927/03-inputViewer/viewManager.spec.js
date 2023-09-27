describe('click event와 view화면을 처리하는 클래스입니다.', ()=>{
    
    const viewerEl  = document.createElement("strong")
    const inpTxt = document.createElement("input")
    const btnEl = document.createElement("button")

    const textManager = null;
    // 텍.매를 잘 전달하고 있는지 확인!
    it("textManager 전달오류 예외처리", ()=>{
        const actual = () => new ViewManager(textManager,{btnEl, inpTxt, viewerEl})
        // actual = text 중인 함수 혹은 코드의 반환값을 함수 형태로 넣어야해요

        // toThrowError() : 코드에서 실제로 error를 발생시키고 있는지 확인합니다.
        expect(actual).toThrowError()
    })

    // 옵션을 잘 전달하고 있는지 확인!
    it("options 누락 예외처리", ()=>{
        const viewerEl  = null
        const inpTxt = null
        const btnEl = null
        const textManager = new TextManager();
        const actual = ()=> new ViewManager(textManager, {viewerEl, inpTxt, btnEl})

        expect(actual).toThrowError();
    })

    // changeVal
    it("Click 이벤트에 changeVal 함수 실행", ()=>{
        const textManager = new TextManager();
        const viewManager = new ViewManager(textManager, {btnEl, inpTxt, viewerEl});
        // console.log(btnEl, inpTxt, viewerEl)

        // viewManager.changeValue()
        spyOn(viewManager, "changeValue"); // 특정한 객체의 함수를 감시합니다. (우리가 감시를 할 객체, 객체에서 실행할 함수 명)
        btnEl.click() // html 요소를 클릭해주는 메소드!

        //toHaveBeenCalled() : 특정 함수가 호출이 된 적이 있는지 확인
        expect(viewManager.changeValue).toHaveBeenCalled()

        // changeValue 함수에 스파이를 붙여서 감시하고
        // method로 btn을 클릭하고
        // toHaveBeenCalled를 통해서 버튼 클릭에 value가 change되었는지 확인
    })

    // updateView
    it("updateView 잘 실행 되었는지",()=>{
        const textManager = new TextManager();
        const viewManager = new ViewManager(textManager, {btnEl, inpTxt, viewerEl});

        spyOn(viewManager, 'updateView');
        viewManager.changeValue();
        expect(viewManager.updateView).toHaveBeenCalled();
    })

})