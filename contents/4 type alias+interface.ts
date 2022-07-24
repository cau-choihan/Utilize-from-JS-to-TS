import *as Types from './4 type alias_type'

//타입 규정을 간략하게 표기 가능
const G: 'Guitar' | 'Bass' | 'Drum' | 'Keyboard' | 'Synth' = 'Guitar';
const G2: Types.Instrument = 'Bass';
//let G3: Instrument = 'Gui';

console.log(G, G2);
//console.log(G3);

const drummer: Types.session = {
    name: 'hello',
    member: 3,
    position: 'Drum'
}
/*
//객체의 값이 누락되면 error 표시됨.
//만약 member key가 member?: Member로 선언되었다면 ontional key이므로 생략 가능
const guitarist: Types.session = {
    name: 'world',
    position: 'Guitar'
}
*/
console.log(drummer);
//console.log(guitarist);

const nothing: Types.nothing = function () {
    return "It's nothing"
}

console.log(nothing);