//**********실무적으로 굉장히 중요한 내용일 것 같음.

class Circle {
    #radius
    constructor(radius: number) {
        this.#radius = radius;
    }
    get radius() {
        return this.#radius;
    }
    area = () => this.#radius * this.#radius * Math.PI
}

const circle = new Circle(6);
console.log(circle.area());

//객체 circle을 사용할때 area의 역할을 명시한다면, area를 통한 범위 공식원리를 알 필요없이 쉽게 넓이 값에 접근 가능*****