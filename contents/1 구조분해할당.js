
//구조분해할당
//리스트
const name = ['red', 'green', 'blue'];
const [red, green, blue] = name;
console.log(red, green, blue);// => red green blue
const [, , blue2] = name;
console.log(blue2);//=>blue

//객체
const color = { gold: 'G', silver: 'S', bronze: 'B' };
const { bronze, gold } = color;
console.log(gold, bronze); //=> G B
//객체는 key:value 형태이므로 key만 맞으면 순서로부터 더 자유로움