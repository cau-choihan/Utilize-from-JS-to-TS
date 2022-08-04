let arr = [];
//console.log(arr) => []

//push & pop 스택과 같은 원리로 작동하는 배열메소드
arr.push('data');
arr.push('data2');
arr.push('data3');
//console.log(arr) => [ 'data', 'data2', 'data3' ] push는 배열의 뒤에 데이터 추가함.

arr.pop();
//console.log(arr) => [ 'data', 'data2' ] pop은 배열의 뒤 데이터를 꺼냄.( stack 과 같은 원리)

arr.push('data3');

const sl = arr.slice(0, 2);
// console.log(sl); => [ 'data', 'data2'] slice는 앞의 인수~뒤 인수의 전까지의 인덱스를 잘라옴
// console.log(arr); => [ 'data', 'data2', 'data3' ] slice는 기존 데이터는 바꾸지 않음.
const spl = arr.splice(0, 2, 'data0', 'data00', 'data000');
// console.log(spl); => [ 'data', 'data2'] splice도 앞의 인수~뒤 인수의 전까지의 인덱스를 잘라옴
// console.log(arr); => [ 'data0', 'data00', 'data000', 'data3' ] splice는 기존 데이터만 남기고 잘라온 위치에 입력한 데이터로 대체함

//shift & unshift는 배열의 앞에 작동하는 메소드. push & shift는 queue와 같은 원리 작동함.
arr.shift();
//console.log(arr); => [ 'data00', 'data000', 'data3'];
arr.unshift('data100');
//console.log(arr); => [ 'data100', 'data00', 'data000', 'data3' ]

//join method
const arr2 = arr.join(' & ');
//console.log(arr2); => data100 & data00 & data000 & data 
//join method는 받은 인수를 각 배열의 데이터 사이에 삽입하여 배열을 하나의 값으로 합친다.

const arrSum = [...arr, arr2];
//console.log(arrSum); => ['data100','data00',data000','data3','data100 & data00 & data000 & data3']
//배열의 합은 연산자를 사용하여 가독성 높고 효율적인 코딩을 할 수 있음