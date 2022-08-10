const e1 = {
    name: 'E1',
    color: 'red'
}
const e2 = {
    name: 'E2',
    width: 100
}
const e3 = {
    name: 'E3',
    height: 200
}

console.log(e1);
console.log(e2);
console.log(e3);

//프로토타입 체이닝
//e1의 프로토타입 객체가 e2를 가리킴. 
e1.__proto__ = e2;
e2.__proto__ = e3;
console.log(e1);
console.log(e2);
console.log(e3);
console.log(e1.width);
console.log(e1.height);

//함수의 prototype
function proto(name) {
    this.name = name
}
//객체의 동적바인딩 활용, 다만 현재는 별로 사용하지 않는 테크닉
proto.prototype.age = 10;

const P1 = new proto();
console.log(P1.age);