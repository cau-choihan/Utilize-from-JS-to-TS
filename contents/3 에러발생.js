
function exception() {
    //throw 함수는 다양한 자료형의 예외를 던질 수 있다.
    throw new Error('error occured');
}

function main() {
    //try-catch 문 => try함수에서 예외(throw)가 발생하면 catch 구문으로 받고, finally문은 반드시 실행됨.
    try {
        exception();
    }
    //catch 구문은 선착순으로 throw 혹은 return 등 던진값을 받음
    catch (error) {
        console.log(error);
    } finally {
        console.log('done');
    }
}
main();