//생성자 함수는 프레임워크등에서 적극적으로 사용할 가능성이 있다.

function* plus1(n) {
    let num = 1;
    while (true) {
        const plusNum = yield num;
        //yield : 함수를 일시정지하고 반환, 처음에는 plusNum을 1로 초기화하며 num을 반환한다.(num은 1);
        if (plusNum) {
            num += plusNum;
        } else {
            num++;
        }
    }
}

const Input = plus1();

//next : 함수를 재개
for (let i = 0; i < 5; i++) {
    console.log(Input.next());
}
console.log(Input.next(5));