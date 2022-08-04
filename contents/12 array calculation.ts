//map 용법 추가공부 필요

const list: string[] = [
    'key1',
    'key2',
    'key3'
]

//forEach는 변수없이 배열 순회 가능 하지만 반복문보다 성능 떨어짐.
list.forEach((name: string, index: number) => {
    console.log(name, index);
});
