/** REPL 사용하기 */

// READ, EVAL, PRINT, LOOP 
// 그냥 자바스크립트 파일 만들고 실행하자...

/** 모듈 만들기*/


/** 타이머 */

const timeout = setTimeout(() => {
    console.log('1.5초 후 실행 아 오늘 아무것도 하기싫다');
    
}, 1500);

const interval = setInterval(() => {
    console.log('1초 마다 실행 1초마다 아무것도 하고싶디 않아');
    
},1000);