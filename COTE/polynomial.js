function solution(polynomial) {
    var answer = '';
    //숫자 + 문자 + 부호(문자열)
    //ex)"3x + 7 + x"
    //공백으로 쪼개기
    polynomial = polynomial.split(" ");
    //ex)"3x" "+" "7" "+" "x"
    
    //+랑 x밖에 안주어지기 때문에 +에 대한 처리는 필요 없음.
    //x가 포함되어 있으면/마지막 문자열이 x이면 
    let coefficient = 0;
    let constant = 0;
    
    for(var i = 0; i<polynomial.length; i++){
        let item = polynomial[i];
        
        //뒤에서 두번째 까지의 문자열끼리 숫자로 바꿔서 계수에 저장
        if (item[item.length-1] === 'x'&& item !== "+"){
            if(isNaN(parseInt(item.slice(0, item.length-1)))){
                coefficient++;
            }else{
                coefficient += parseInt(item.slice(0, item.length-1));
            }
        }else if(isNaN(parseInt(item)) == false){
            console.log(item, "은 숫자입니다");
            constant += parseInt(item);
        }        
    }
    
    //계수를 다시 x랑 곱해줌
    //다시 문자로 바꿀 필요 없이 + 하면 문자열로 더해짐
    //같은 식이라면 짧은 수식을 리턴합니다.
    if(constant !== 0){
        answer += coefficient + "x" + " + " + constant;
    }else{
        answer += coefficient + 'x'
    }
    
    return answer;
}

function solution2(polynomial) {
    var answer = '';

    polynomial = polynomial.split(" ");

    let coefficient = 0;
    let constant = 0;

    for(var i = 0; i<polynomial.length; i++){
        let item = polynomial[i];
        if (item[item.length-1] == 'x'&& item !== "+"){
            if(isNaN(parseInt(item.slice(0, item.length-1)))){
                coefficient++;
            }else{
                coefficient += parseInt(item.slice(0, item.length-1));
            }
        }else if(item[item.length-1] !== 'x' && isNaN(parseInt(item)) == false ){
            console.log(item, "은 숫자입니다");
            constant += parseInt(item);
        }        
    } 

    if(constant !== 0 && coefficient !== 0 && coefficient !== 1){
        answer += coefficient + "x" + " + " + constant;
    }else if(coefficient !== 0 && coefficient !== 1){
        answer += coefficient + 'x';
    }else if(coefficient == 1 && constant == 0){
        answer = "x";
    }else if(coefficient == 1 && constant !== 0){
        answer = "x"+ " + " + constant;
    }else if(constant !== 0){
        answer += constant;
    }

    return answer;
}
