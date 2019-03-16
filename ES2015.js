/* const, let **/

if(true){
    var x = 3;
}
console.log(x); //3
if(true){
    const y = 3;
}

// console.log(y); // 블록 안의 y는 접근할 수 없다.

// 보통의 자바스크립트 변수는 var
// Const 와 let은 블록 밖에서 접근할 수 없음.

const a = 0;
// a=1; // Const는 한번 대입하면 다른 값을 대입 할 수 없다. 에러발생함!
console.log(a);
let b = 4;
console.log(b); //let 은 오류 발생안함 대신 블록 밖에서 접근 불가!

