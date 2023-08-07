// const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b ));
function com (a, b) {
    if (a % b === 0) {
        return b;
    }else {
        com(b, a % b)
    }
}

const gcd = com(15,25);

// 0을 오브젝트로 인식 []를 프로퍼티로 인식 0[30] 이러한 값이 없기 때문에 undefined 를 출력