console.log("connected");

//switch문
// - 하나 이상의 case 문으로 구성
// default문이 있는데 필수는 아님 -> 작성 권장
// - break 키워드 : 블록(증괄호)를 빠져날갈 때 사용하는 키워드

/*
    switchㅁ문의 기본구조

    switch(x){
        case 값 : // if(x === 값)
        //x가 값과 같을 때 실행할 문장
        break; //x가 값과 같을 때의 문장을 실행 -> 블록을 빠져나옴
    }

    case 값2 : // if(x === 랎2)
        //x가 값2와 같을 때 실행할 문장
        break; // x가 값2와 같을 때의 문장을 실행 -> 블록을 빠져나옴

    .
    .
    .

    default : // alse
        //x가 case에 있는 어떤 것과도 일치하지 않았을 때 실행할 문장
        break; //블록을 빠져나옴
*/

let a = 2 + 2;

switch(a){
    case 3:
        console.log("비교하려는 값보다 작다.");
        break;
    case 4:
        console.log("비교하려는 값과 일치합니다.");
        break;
    case 5:
        console.log("비교하려는 값보다 큽니다.");
        break;
    default:
        console.log("어떤 값인지 파악안됨");

        break;
}

if(a === 3){
    console.log("비교하려는 값보다 작습니다.");
}
else if(a === 4){
    console.log("비교하려는 값과 일치합니다.");
}
else if(a === 5){
    console.log("비교하려는 값보다 큽니다.");
}
else{
    console.log("어떤 값인지 파악 안됨")
}


var grade = 'A';
switch(grade){
    case "A":
        console.log("A");
        break;
    case "B":
        console.log("B");
        break;
    case "C":
        console.log("C");
        break;
    case "D":
        console.log("D");
        break;
    case "F":
        console.log("F")
        break;
    default:
        console.log("오류 발생");
        break;
}




//여러 개의 case문을 묶을 수 있다.
a = 1;
switch(a) {
    case 1: 
    case 2:
    case 3: 
        console.log("비교하려는 값보다 작습니다.");
        break;
    case 4: 
        console.log("비교하려는 값과 일치합니다.");
        break;
    case 5: 
    case 6: 
    case 7: 
    case 8: 
    case 9:
        console.log("비교하려는 값보다 큽니다.");
        break;
    default:
        console.log("어떤 값인지 파악안됨");
        break;
}
        


// 삼항 연산자
//-3개의 피연산자를 필요로 함
//-조건식 ? (참일 때 실행할 코드) : (거짓일 때 실행할 코드)

//짝홀 구별
//ver.1
if(num % 2 === 0){
    console.log("짝수");
}else{
    console.log("홀수");
}

//ver.2
var result = (num % 2 === 0) ? "짝" : "홀";
console.log(result);

(num % 2 === 0) ? console.log("짝") : console.log("홀");
console.log((num % 2 === 0) ? "짝" : "홀");

console.log(3 > 1 ? 'bigger' : 'smaller');

let hour = 13;
console.log((hour < 13) ? '오전' : '오후');
