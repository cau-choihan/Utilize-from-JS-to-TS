//추가공부 필요
interface Container {
    tagName: string;
    className: string;
    children?: string[];
    getTagName: () => string;
    getClassName: () => string;
}
//interface는 public이 기본, private을 사용할 이유가 없음

class MyContainer implements Container {
    tagName: string;
    className: string;
    constructor(tagName: string, className: string) {
        this.tagName = tagName;
        this.className = className;
    }
    getTagName = () => this.tagName;
    getClassName = () => this.className;
}