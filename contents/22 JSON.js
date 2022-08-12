//JSON이란?
//객체를 데이터로 주고받기 어렵기 떄문에 데이터를 교환하기 위해 개발된 포맷이다.

const jsonString = `
{
    "name" : "A",
    "age" : 25
}
`;// key 의 이름을 " " 로 감싸줘야하며, value도 문자열이면 " " 로 감싸줘야함. 싱글쿼트(') 불가능!!!
//JSON의 value는 string, number, array, object, boolean 의 자료형을 지원함.

const jsonObject = JSON.parse(jsonString);
//JS의 내장객체 JSON과 parse method를 이용하여 JSON 파일을 객체로 쉽게 변환 가능

console.log(typeof jsonObject);
console.log(jsonObject.age);

const jsonString2 = JSON.stringify(jsonObject);
console.log(typeof jsonString2);
//JSON.stringify()를 통해 객체를 JSON형식으로 쉽게 변형 가능


//주의사항 : JSON은 함수는 지원하지 않음. ex) function();

//JSON파일에서 싱글쿼트(')등의 사용으로 JSON.parse과정에서 오류가 나면 프로그램이 종료된다.
//이때 try-catch 구문의 활용 가능.

try {
    const jsonObject2 = JSON.parse(jsonString2);
}
catch (e) {
    console.log('error occurred')
}
//try-catch 구문으로 JSON을 안전하게 사용하는 습관을 들이자.