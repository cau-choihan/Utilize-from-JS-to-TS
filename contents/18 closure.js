function count() {
    let num = 1;//num의 로컬공간

    /*
    count함수가 호출되면서 함수안에 함수가 생성될때 
    함수 속의 함수에서 함수의 변수에 접근하면 함수의 변수는 클로저 공간에 변수를 저장함.
    Q : 클로저는 공간할당에 효율적인가?
    */
    return function () {
        return num++;
    }
}

const plus = count();
console.log(plus());//num의 클로저를 호출하여 함수 실행
console.log(plus());
console.log(plus());

//closure공간의 장점
//단순호출로 num을 보호하면서 계속 사용가능, 바깥쪽에서 num에 접근하지 못하게 보호 가능
//js의 closure는 ts의 private으로 쉽게 구현가능