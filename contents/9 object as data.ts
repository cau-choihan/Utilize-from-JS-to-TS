type Obj = {
    id: string;
    password: string;
    length: number;
    activation: boolean;
};

let obj: Obj = {
    id: 'anonymous',
    password: 'password',
    length: 7,
    activation: true
};

//함수처럼 정보값을 저장해두고 데이터만 변경하는 코딩이 변화에 더 쉽게 적응 가능하다.
function objMaker(
    id: string,
    password: string,
    length: number,
    activation: boolean
): Obj {
    {
        return {
            id,
            password,
            length,
            activation
        }
    }
}
let obj1 = objMaker('a', 'b', 5, true);
console.log(obj1);

class newObj implements Obj {
    id: string;
    password: string;
    length: number;
    activation: boolean;

    constructor(
        id: string,
        password: string,
        length: number,
        activation: boolean
    ) {
        this.id = id;
        this.password = password;
        this.length = length;
        this.activation = activation;
    }
}
const obj2 = new newObj('id', 'pw', 10, true);
console.log(obj2)

if (obj2 instanceof newObj) {
    console.log('true');
}
//객체 인스턴스는 조건문을 활용하여 규격확인에 용이하다.

const example1 = obj1;
const example2 = Object.assign({}, obj1);//example2는 example1와 완전히 같지만 example1으로부터 독립된 다른 객체이다.
//assign method는 앞 객체와 뒷 객체들을 합쳐준다.
const example3 = { ...obj1 };//연산자를 통한 객체복사
