// tddTest.js를 test하기 위한 코드

//테스트 유닛을 묶어주고, 전체적인 설명을 제공
// 지금 무슨 테스트 하고 있구나. 이 함수는 어떤 함수구나 를 알 수 있도록

describe('Jasmine Test!!!', () => {

    //it 함수는 테스트 유닛을 의미합니다.
    it('1을 더해주는 함수입니다.', ()=>{
        
        const num = 30;

        // expect 기대식(실행할 함수의 결과값을 예측해서 작성)
        // toBe : matcher함수 (기댓값과 실행값이 일치하는지 판단)
        expect(plusOne(num)).toBe(31)
        
    })
})