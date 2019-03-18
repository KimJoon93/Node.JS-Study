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

/********************************************************************* */

/** 템플릿 문자열 */
var num1 = 1;
var num2 = 2;
var result = 3;

var string1 = num1 +' 더하기 ' + num2 + '는 \''+ result + '\''; //지저분 ㅡ ㅡ
console.log(string1); //1 더하기 2는 '3'

const string2 = `${num1} 더하기 ${num2}는 '${result}'` // 백틱 사용, 그리고 세미콜론 필요없다! ', "" 사용가능
console.log(string2); // 위와 같은 값이 나오는데 더 깔끔, 

/********************************************************************* */

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

/********************************************************************* */    
    
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
        var that = this;    // that 이라는 변수를 사용해서 relationship1에 간접적으로 접근
        this.friends.forEach(function(friends){
            console.log(that.name, friends);
        });
    },
};
relationship1.logFriends()
const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero','zero'],
    logFriends: function(){
        this.friends.forEach(friend => {    //function을 쓰지 않고 arrow사용
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends()

/********************************************************************* */
/** Unstructure Allocation*/

var candyMachine = {
    status : {
        name: 'node',
        count: 5,
    },
    getCandy: function(){
        this.status.count--;
        return this.status.count;
    }
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

const candyMachine2 = {
    status: {
        name: 'node',
        count: 5,  
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    }
}

//배열도 비구조화 가능
var array = ['nodejs', {}, 10, true]
var node = array[0]
var obj = array[1]
var bool = [array.length-1]

//다음과 같이 바꿀 수 있음
const array1 = ['nodejs', {}, 10, true]
const [node, obj, , bool] = array

/********************************************************************* */

/** 프로미스 */
// JS와 노드에서는 주로 비동기 프로그래밍 사용
// 특히 이벤트 주도 방식때문에 콜백함수 자주 사용. But, 
// ES2015 부터는 콜백이 아닌 프로미스 기반으로 재구성해서 콜백 헬 극복함

const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공')
    }else{
        reject('실패')
    }
});

promise
    .then((message)=> {
        console.log(message);   //성공한 경우
    })
    .catch((error) => {
        console.error(error); //실패한 경우
    });


/********************************************************************* */

/** Async/Await*/
//Node 7.6 부터 지원되는 기능

async function findAndSaveUser(Users){
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender: 'm'});
}
