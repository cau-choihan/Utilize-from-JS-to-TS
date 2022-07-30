//string형태의 인수를 받고 string형태를 반환하는 함수
function ul(child: string): string {
    return `<ul>${child}</ul>`
}

//string형태의 인수를 받고 string형태를 반환하는 함수
function ol(child: string): string {
    return `<ol>${child}</ol>`
}

//string형태를 입력받아 string을 출력하는 함수 container와, string형태를 배열로 받은 contents 를 인수로 받아 string형태로 출력하는 List 함수
function List(container: (child: string) => string, contents: string[]): string {
    const list = [];
    for (const content of contents) {
        list.push(`<li>${content}</li>`);
    }
    return container(list.join(''));
}

const htmlUL = List(ul, ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']);
const htmlOL = List(ol, ['spring', 'summer', 'autumn', 'winter']);

console.log(htmlUL);
console.log(htmlOL);