const P = new Promise((resolve, reject) => {
    resolve('hello');
    reject('error');
})
//함수 성공시 resolve, 함수 실패시 reject 실행

P.then((hello) => {
    console.log(hello);
})
P.catch((e) => {
    console.log(e);
})
//then method를 통해 resolve method로 리턴된 값을 받을 수 있음
//reject method는 catch 객체로 리턴된 값을 받을 수 있음

const P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('clear');
    }, 2000);
})
P2.then((resolve) => console.log(resolve))
//2초후 clear 출력.

//Promise를 다양하게 학습하여 async의 await를 이용, then 체이닝을 깔끔한 동기코드로 처리 가능