//기본형 함수
function func(a) {
    return a + 1;
}
const result = func(10);
console.log(result);

//익명 함수 (이름없는 함수)
const noName = function () {
    return 100;
};
console.log(noName());

//즉시실행함수
//어플리케이션에서 단 한번만 사용하는 함수를 만들때 사용함
(function () {
    console.log('hello');
})();

//가변인자 => 인수에 ...args를 보여주는 표현력 높은 함수
function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sum(10, 20, 30, 40));
function example1(a, b, ...args) { };
//=>다음과 같이 표현하면 앞의 두 인수는 필수 나머지 인수는 자유롭게 설정할 수 있음을 알 수 있다.

//apply,call. apply call은 첫번째 인자로 context를 받음. 
console.log(
    sum(),
    sum.apply(null,),
    sum.call(null,)
)

//변형함수들
//1.화살표 함수
//인수가 하나이면 ()생략가능, 함수구문이 return문 1줄이라면 {}생략가능
const one = x => x + 1;
console.log(one(3));

//2.생성기 함수
function* generator() {
    yield 10;
}
const g = generator();
g.next();

//3.비동기 함수
async function sync() {
    //promise의 비동기 코드구성을 동기적으로 바꿔주는 것
}