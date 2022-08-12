
const X = (n) => 100 * n;

const Y = X(10) * 50;
//동기코드 : 선행라인이 끝나기 전에 독립적으로 실행될 수 없는 코드

function timeMethod(a, b) {
    setTimeout(() => {
        return a + b;
    }, 100)
}
const Z = timeMethod(10, 20);
const z = Z;
//timeMethod의 setTimeout으로 인해 Z와 z의 구현과 timeMethod의 구현이 시간이 맞지않음.

function callbackMethod(a, b, callBack) {
    setTimeout(() => {
        callBack(a, b);
    }, 100);
}
const CB = callbackMethod(10, 20, (result) => {
    return console.log(result);
})

//비동기적 코드는 굉장히 복잡하기때문에 promise 문법이 생김.
