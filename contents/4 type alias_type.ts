export type Instrument = 'Guitar' | 'Bass' | 'Drum' | 'Keyboard' | 'Synth';

export type Name = string;
export type Member = number;
export interface session {
    readonly name: Name;
    readonly member: Member;
    position: Instrument;
}

export type nothing = () => string;

export interface Genre extends session {
    genre?: string;
}

export type inform = {
    name: string;
    password: string;
}
export type profile = inform & {
    age: number;
}

export interface KeyString {
    [anything: string]: number;
}
export type FreeString = {
    [free: string]: number;
}
//key(prop)의 이름은 자유롭게 적을 수 있음. anything, free 파트.

// export type test = {
//     [typeA: string]: string;
//     [typeB: string]: number;
// }
//==> typeB : number에 빨간줄이 그이면서 두가지는 사용할 수 없도록 나옴

export interface method1 {
    (url: string, search?: string): Promise<string>;
    //string 형태의 url 인자와 optional 인자 search를 입력받으면 string 형태의 Promise 를 출력
}
export type method2 = {
    (url: string, search?: string): Promise<string>;
    //interface와 역할은 같음   
}
export type method3 = () => string;
//{}사용여부에 따라 type alias에 : 를 쓸지 => 를 쓸지 결정

//data 묘사 : type alias
//data + 행위 포함 객체 or class : interface 사용하면 좋을듯함.