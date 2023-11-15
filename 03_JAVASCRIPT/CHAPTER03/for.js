console.log('connected');

//반복문
// - for문
// - while문

//for문
/*
    for(초기값; 조건식; 증감값){
        //반복할 코드
    }
*/

//i++
// i = i+1
// i--
// i = i-1

// case 1. 0~4 출력
for (let i = 0; i < 5; i++) { // i: 0 1 2 3 4 5(false)
	console.log(i); // 0 -> 1 -> 2 -> 3 -> 4
}
console.log('반복문 끝');


// case2. 1~5 출력
// ver1
for (let i = 0; i < 5; i++) {
	console.log(i + 1); // 0+1 1+1 2+1 3+1 4+1 
}
console.log('반복문 끝');
// ver2
for (let i = 1; i < 6; i++) {
	console.log(i); // 1 2 3 4 5 
}
console.log('반복문 끝');
// ver3
for (let i = 1; i <= 5; i++) {
	console.log(i); // 1 2 3 4 5 
}
console.log('반복문 끝');


// case3. 5부터 1까지 출력
for (let i = 5; i > 0; i--) { // i: 4 3 2 1 0
	console.log(i); // 5 4 3 2 1
}
console.log('반복문 끝');

for(let i = 1; i < 11; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log('반복문 끝');

for(let i = 2; i <= 10; i = i+2){
    console.log(i);
}
console.log('반복문 끝');


// 퀴즈) 1부터 10까지 합 구하기
let sum = 0;
for(let i = 1; i < 11; i++){
    sum += i
}
console.log(`1~5까지 모두 더한 값: ${sum}`); // 15


// 퀴즈) 1부터 10까지 짝수의 합 구하기
sum = 0;

for(let i = 1; i < 11; i++){
    if(i % 2 === 0){
        sum += i;
    }
}
console.log("1~10까지 짝수만 더한 값 : " + sum);



//while문
/*
    while(조건식){
        //반복할 코드
    }

    => while문은 조건식을 만족하면, 블록 내부 코드를 실행한다.
    => 내부 코드 실행완료하면, -> 조건식으로 돌아가 다시 반복 여부를 결정한다.
        -즉, if문은 조건식이 true이면 블럭 내부 코드를 1번 실행하는데,
        -while문은 조건식이 true이면, "계속" 반복한다.
    => 그리고 조건식 결과가 false가 되면, 블럭을 빠져나온다.(반복이 중단됨)
*/

//case 1. 1~5 반복
var n = 1;

while(n <= 5){
    console.log("while문 사용 출력 : " + n);
    n = n + 1; //n++
}
console.log("반복문 끝");


//퀴즈2) 
///case 2. 9 부터 4까지 while문으로 반복
var num = 9;

while(num > 3){
    console.log("whilte문 사용 거꾸로 출력 : " + num);
    num--;
}
console.log("반복문 끝");


//case 3. 1~10까지 짝수 출력
var n = 1; 

while(n < 11){
    if(n % 2 === 0){
        console.log("case3 1~10 짝수 출력: " + n);
    }
    n++;
}
console.log("반복문 끝");


//case 4. 10~1까지 홀수 출력

var n = 10;

while(n > 0){
    if(n % 2 === 1){
        console.log("case 4 10~1 거꾸로 홀수 출력 : " + n);
    }
    n--;
}
console.log("반복문 끝");


//===============================
//무한 루프
//: 반복문에서 조건식의 결과가 항상 참이 되어 반복문을 탈출하지 못하는 상태
// 의도적으로 무한루프를 만들어서 특정 조건이 반복될 때까지 반복하여서 코드를 작성하기도 함

/*
    while(true){
        ...
        //탈출 조건 만들기
    }
*/

//조건문을 등을 이요해 탈출 조건을 만들어 주고
//break 키워드 -> 블록({})으로 빠져나옴

// let go = confirm("계속 진행하까요?");
// console.log(go);
//[확인] : true;
//[취소] : false;

var count = 0;

while(true){
    if(confirm("계속 진행하겠습니다?") === true){
        alert(`${count}번째 반복합니다.`);
        count = count + 1;
    }else{ // false
        break;
    }
}
console.log("무한 루프 탈출 성공");
