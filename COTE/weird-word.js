function solution(s) {
    var answer = '';
    const arr = s.split(' ');
    arr.forEach((item, index)=>{
        arr.splice(index, 1, item.split(''));
    });
    
    arr.forEach((item, index)=>{
        item.forEach((iitem,iindex, arritem)=>{
            if(iindex == 0){
                arritem.splice(iindex, 1, iitem.toUpperCase());
            }else if(iindex % 2 == 0){
                arritem.splice(iindex, 1, iitem.toUpperCase());
            }else{
                arritem.splice(iindex, 1, iitem.toLowerCase());
            }
        })
        item = item.join('');
        arr.splice(index, 1, item);
    })
    
    answer = arr.join(' ');
    
    return answer;
}