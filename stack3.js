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
     
    