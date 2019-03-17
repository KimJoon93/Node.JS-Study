function first(){
    second()
    console.log('첫번째')
}

function second(){
    third()
    console.log('두번째')
}

function third(){
    console.log('세번째')
}
first()

// 호출 스택
// 순서대로 쌓이고 위에서 부터 실행되고 사라진다.
//  
//  third()
//  second()
//  first()
//  main()

// Heap, Queue, Stack의 차이점
// Heap의 경우 밑에서부터 실행된다.
// Queue의 경우 순서대로 실행
// Stack 의 경우 밑에서 부터 쌓이고 가장 위에 있는 것 부터 실행된다. Firtst In Last Out

function run(){
    console.log('3초 후 실행');
}
console.log('시작');
setTimeout(run, 3000);
console.log('끝');



// 실행 결과
// 시작
// 끝
// ...
// 3초 후 실행


// main 이 먼저 쌓이고 그 후에 시작이 호출스택에 쌓이고 실행되고 바로 사라진다 
// 그 후에 setTimeout이 호출스택에 쌓이게 되는데 이때 콜백인 run은 바로 백그라운드로 올라가고 
// 3초 뒤에 태스크 큐로 보낸다
// 그 동안 호출 스택에서 끝 log가 실행되고 난 후 3초 후 실행이 로그에 올라오게 된다. 

function longRunningTask(){
    // 오래 걸리는 작업
    for(var i=0; i<50; i++){
        console.log(i+"번째 작업");
    }
    console.log('작업 끝');
}   

    console.log('시작');
     setTimeout(longRunningTask, 0);
     console.log('다음 작업');

     // 시작
     // 다음 작업
     // 작업 끝
     // 
     //다음작업 콘솔이 먼저 나오는 이유는 setTimeout 실행시 콜백 run은 백그라운드 태스크로 넘어가고
     //호출스택에 이미 다음작업이 올라간다. 그러므로 작업들은 태스크 큐에서 기다렸다가 올라가게 되므로 
     //오래걸리는 작업들을 백그라운드에서 돌아가게끔 하여 논블로킹 방식으로 돌아가게 해야한다.