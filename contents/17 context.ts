//context : execution 컨텍스트, lexical 컨텍스트 두가지 종류가 있음
//execution : 실행 컨텍스트, 기본적으로 쓰임 method를 호출하는 역할

const person = {
    name: 'P1',
    age: 25,
    getAge() {
        return this.age;
    }
}

person.age;
person.getAge();

const age = person.getAge;

//age가 실행되는 순간 소유자가 벗겨짐.
//age(); => 오류발생

console.log(age.call(person));

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.getAge = this.getAge.bind(this)//항상 getAge의 소유자를 this로 고정함
    }

    getAge() {
        return this.age;
    }

    //lexical 컨텍스트, 더욱 효율적임
    getName = () => this.name;
}

const p1 = new Person('P2', 30);
console.log(p1.getAge());

const myAge = p1.getAge;

//class를 만들때 context를 고정시키는 방법이 있음 bind 메소드 사용
myAge.call(p1);


const name1 = p1.getName;
//name1은 함수형식으로 생성
console.log(name1());
p1.getName;
const a = p1.getName();
console.log(a);