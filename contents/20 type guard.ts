//컴파일 단계에서의 타입가드
function typeGuard1(value: number | string) {
    if (typeof value === 'string') {
        value.replace('a', 'A');
    }
    //return value.replace('b', 'B'); => value의 타입이 string이 아니면 replace method에 접근하지 못할 수 있으므로 ts의 타입가드가 적용됨(경고)
}

typeGuard1(10);
typeGuard1('abHello');

//함수에서의 타입가드
function typeGuard2(value?: number | null) {
    if (value === null) return;//타입가드 역할을 하는 코드

    console.log('before');
    console.log(value?.valueOf());
    //만약 if(a===null)이 없어서 value가 null로 들어오면 value?는 undefined를 리턴함

    console.log('after');
}

//인터페이스의 타입가드
interface TypeGuard {
    input: string;
    output: string;
}

//타입가드를 위한 is 문법
//input is TypeGuard => input의 타입이 TypeGuard인가? 를 검사함
function typeGuard3(value: any): value is TypeGuard {
    return value.input !== undefined;
    //value 인자에 input속성이 있는지 없는지 검사함
}

console.log(typeGuard3({ input: 'input', output: 'output' }));
console.log(typeGuard3({ input: 3, output: 3 }))//true로 출력되는 한계 존재함.