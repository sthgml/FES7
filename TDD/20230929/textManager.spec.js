describe('text data 관리하는 함수!',()=>{
    let tm = new TextManager();
    it('getData()',()=>{
        let initData = tm.getData();
        expect(tm.getData()).toBe(initData);
    })

    it("setData()", ()=>{
        let newData = "hello Weniv"
        tm.setData(newData);
        expect(tm.getData()).toBe(newData)
    })
})