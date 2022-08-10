//class - instance - prototype 연계공부 필요

//instance 제작의 구 표현방식(함수)와 최신방식(클래스)
function common() {
    this.common = [];
    this.currentId = 0;
}

//프로토타입을 통한 삽입
//프로토타입 => 인스턴스에 등장하게 될 메소드
common.prototype.getNewId = function () {
    this.currentId++;
    return this.currentId;
}

//자체적 삽입
//인스터스 객체에 드러나지 않는 방식
common.createItem = function (name, price) {
    return { name, price };
}

common.prototype.addItem = function (item) {
    this.common.push({
        ...item,
        id: this.getNewId()
    })
}
common.prototype.clearCommon = function (item) {
    this.common = [];
    this.currentId = 0;
}

//new를 사용하지 않으면 독립된 객체로 따로 생성되지 않음.
const exam1 = new common();
exam1.addItem(common.createItem('exam', 1000));
console.log(exam1);

//class는 대문자로 시작, 자료 초기화시 소문자에 저장하는 형식 ex) improved = Improved;
class Improved {
    static createItem = (name, price) => ({
        name, price
    });

    common;
    currentId;

    constructor() {
        this.currentId = 0;
        this.common = [];
    }
    getNewId = () => {
        this.currentId++;
        return this.currentId;
    }
    addItem = item => {
        this.cart.push({
            ...item,
            id: this.getNewId()
        });
    }
    clearCart = () => {
        this.currentId = 0;
        this.cart = [];
    }
}