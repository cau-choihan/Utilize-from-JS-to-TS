
//block스코프는 현재 스코프의 자료를 찾은 후 점점 넓은 범위에서 나가게 된다(지역 -> 전역)
let blockScope = 10;
if (blockScope = 10) {
    let blockScope = 100;
    console.log(blockScope);
}
console.log(blockScope);

//hoisting
hoisting();
function hoisting() {
    console.log('helloWorld');
}
//JS의 hoisting : scope가 생성될때 해당 scope의 함수나 변수를 미리 만든 후 코드를 실행시키는 원리

exam();
const exam = function () {
    console.log('exam');
}
//hoisting은 함수정의문은 가능하나, 함수식은 불가능함.

//scope는 정리하기 쉽도록 해당 스코프의 상단에 정리하는 습관을 들이고 hoisting 보다는 함수식을 쓰는 게 안전할듯함.