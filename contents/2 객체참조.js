
const object = {
    boolA: true
}
let object2 = object;
object2.boolA = false;

console.log(object.boolA);//=>false
//객체의 참조는 C의 포인터 개념과 유사

function obj3(obj) {
    obj.boolA = true;
}
obj3(object2);
console.log(object.boolA);//=>true
//함수도 같은 원리로 작용, object의 포인터 object2를 ojb3함수에서 적용시켜도 obj에 참조함
