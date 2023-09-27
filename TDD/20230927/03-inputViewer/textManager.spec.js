describe("텍스트 관리자입니다!",()=>{
    const textManager = new TextManager();
    it('값을 가져오는 기능입니다',()=>{
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue)
    }) 

    it("값을 수정하는 기능입니다.", ()=>{
        const newValue = 'hello Weniv';
        textManager.setValue(newValue);
        expect(textManager.getValue()).toBe(newValue);
    })
})