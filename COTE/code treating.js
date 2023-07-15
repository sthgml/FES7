function solution(code) {
    var ret = '';
    let mode = 0;

    for(let idx = 0; idx<code.length; idx++){
        if(mode == 0){
            if(code[idx] !== "1"){
                // console.log("mode:", mode, code[idx], "는 1이 아님")
                if(idx % 2 == 0){
                    ret += code[idx];
                    // console.log(idx,"는 짝수임", code[idx], "를 추가하겠음")
                }else{
                    // console.log(idx,"는 홀수임", code[idx], "를 추가하지 않겠음")
                }
            }else if(code[idx] == "1"){
                // console.log("mode", mode, code[idx],"는 1임")
                mode = 1;
                // console.log("mode", mode, "로 바꿔줬음")
            }
        }else{
            if(code[idx] !== "1"){
                // console.log("mode:", mode, code[idx], "는 1이 아님")
                if(idx % 2 == 1){
                    ret += code[idx];
                    // console.log(idx,"는 홀수임", code[idx], "를 추가하겠음")
                }else{
                    // console.log(idx,"는 짝수임", code[idx], "를 추가하지 않겠음")
                }
            }else if(code[idx] == "1"){
                // console.log("mode", mode, code[idx],"는 1임")
                mode = 0;
                // console.log("mode", mode, "로 바꿔")
            }
        }
    }
    if(ret.length == 0){
        return "EMPTY"
    }else {
        return ret;    
    }
}