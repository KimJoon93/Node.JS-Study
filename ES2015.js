/** Const, let */

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


/** 템플릿 문자열 */
var num1 = 1;
var num2 = 2;
var result = 3;

var string1 = num1 +' 더하기 ' + num2 + '는 \''+ result + '\''; //지저분 ㅡ ㅡ
console.log(string1); //1 더하기 2는 '3'

const string2 = `${num1} 더하기 ${num2}는 '${result}'` // 백틱 사용, 그리고 세미콜론 필요없다! ', "" 사용가능
console.log(string2); // 위와 같은 값이 나오는데 더 깔끔, 

/** 객체 문자열*/

//기존 방식
var sayNode = function () {
    console.log('Node')
}

var es = 'ES'

var oldObject = {
    sayJS: function(){
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es+6] = 'Fantastic' // oldObject에 동적으로 추가

oldObject.sayNode() // Node
oldObject.sayJS() //JS
console.log(oldObject.ES6) // Fandtastic

//New 방식
const newObject = {
    sayJS(){                //function 안붙여도 됨
        console.log('JS')
    },
    sayNode,                //sayNode 한번만 붙여도 됨
    [es + 6]: 'Fantastic',
}
    newObject.sayNode()
    newObject.sayJS()
    console.log(newObject.ES6)
    
/** 화살표 함수 */ 

function add1(x,y) {
    return x+y
}
const add2 = (x,y) => {
    return x+y
}

const add3 = (x,y) => x + y
const add4 = (x,y) => (x+y)
function not1(x){
    return !x
}

const not2 = x => !x

console.log(add1(1,2))
console.log(add2(1,2))
console.log(add3(1,2))
console.log(add4(1,2))
console.log(not1(3))
console.log(not2(3))

var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero','zero'],
    logFriends: function(){
        var that = this;
        this.friends.forEach(function(friends){
            console.log(that.name, friends);
        });
    },
};
relationship1.logFriends()