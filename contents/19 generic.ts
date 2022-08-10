//프레임워크 공부시 반드시 필요함!!

type A = {
    name: string;
    age: number;
}

type B = {
    width: number;
    height: number;
}

function recur(value: any): any {
    return value;
}
//위와같은 함수는 잘못된 value가 들어와도 걸러낼 수 없음

//<>는 아직 확정되지 않은 타입, T는 확정되지 않은 타입의 관습적 표현
function recur2<T>(value: T): T {
    return value;
}
//=>T의 타입을 받으면 T를 입력하고 T를 반환한다. recur함수에서는 인수 value와 return되는 value의 타입이 타입 추가등으로 달라질 수 있는것을 방어해줌.

const generic = <T>(obj: T): T => {
    return obj;
}

let exam1 = recur({ name: 'kim', age: 20, width: 333 });
let exam2 = generic<A>({ name: 'kim', age: 20,/*width:250 => 이곳에서 타입방어가 이루어짐*/ })
//<>를 명시하여 generic함수에서 A타입을 T로 지정할 수 있음. A타입에는 width가 없으므로 걸러줌.

//class상의 제네릭 추가공부 필요
//interface상의 제네릭 
interface NumStr<N, S> {
    A: N;
    B: S;
}
let NS: NumStr<number, string> = { A: 3, B: 'hello' };
let SN: NumStr<string, number> = { A: 'hello', B: 3 };