//join에서 주의사항
// [010, 5044, 2903].join('');
// > ['850442903]
// 왜?
// 0으로 시작해서 앞에 0사라짐.
// 0 다음에 숫자가 나오기 시작하면 진법으로 인식
0b100==4 // binary - 2진법
0o100 == 64 // octa - 8진법
0x100 == 256 // hexa - 16진법
// 근데 저 사이의 알파벳 안 넣으면 기본값 = 팔진법
// 010
// > 8
// 011
// > 9

//map, filter reduce를 사용해서 1~100 중에 3의 배수.
Array(100).fill(0).map((_,i)=>i+1).filter(v=>v%3==0).reduce((a,c)=>a+c, 0)

//1 100의 숫자 중 1이 들어간 숫자는 모두 더해주세요.
Array(100)
.fill(0)
.map((_,i)=>(i+1))
.filter(v=> {
    return v.toString().includes('1')})
.reduce((a,c)=>a+c, 0)