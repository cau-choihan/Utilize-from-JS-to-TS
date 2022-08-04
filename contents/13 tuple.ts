//튜플은 js가 아닌 ts에서만 지원한는 자료형

const T: [number, string, boolean] = [4, 'string', false];
let [sample, Tsample] = T;
//sample = 'string' let sample에 자동으로 number을 typing 하기때문에 sample='string'에 경고표시가 발생함.

type NSB = [number, string, boolean];
const T2: NSB[] = [
    T
]
T2.push([3, 'str', true])//push하는 인수가 number, string, boolean 타입을 벗어나면 경고를 표시해줌.
console.log(T2);