function first(){
    second();
    console.log('첫번째');
}

function second(){
    third();
    console.log('두번째');
}

function third(){
    console.log('세번째');
}
first();

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

