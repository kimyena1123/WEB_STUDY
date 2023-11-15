console.log("connected");

//조건문
//어떤 조건에 따라 논리 구조를 분기(나눔)
// -> 조건에 따라 서로 다른 문장을 실행

//연산자
//1. 동등 연산자: ==, !=, ===
console.log(1 == 1); // true
console.log(1 == 2) // false
console.log(1 != 1) // false
console.log(1 != 2) // true

console.log('1' == 1) //true
console.log('2' != 1) //true
//==, != : 차입(자료형)이 달라도 괜찮음. 값만 비교

console.log("-------------------------");
console.log(1 === 1);//true
console.log(1 === 2);//false
console.log(1 !== 1);//false
console.log(1 !== 2);//true

console.log('1' === 1); //false
console.log('2' !== 1); //true


console.log('------비교연산자--------');
//2. 빅교 연산자
// >, <. >=, <=
console.log(2 > 1); //true
console.log(2 < 1); //false
console.log(1 >= 1); // true
console.log(1 <= 1); //true

//3. 논리 연산자
// && : and : 둘 다 참이어야 함
// || : or :  둘 중 하나라도 참이면 참
// ! : not : 참 -> 거짓, 거짓 -> 참
console.log("------논리연산자-------");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); //false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); //false

console.log("-----논리 : not----")
console.log(!true); //false
console.log(!false);//true
console.log(!!false);//false

console.log("-----------------------");
console.log((2 > 1) && (-2 < 1)); //true;
console.log(!(2 > 1)); //false;
console.log(((2 > 1) && (-2 < 1)) || (5 > 2)); //true;

console.log("--------------조건문-------------");
if(5 > 3){
    console.log("bigger")
}

function isBig(){
    if(5>3){
        return "bigger";
    }
}

console.log(isBig());

//if-else
if(5 > 3){
    console.log("bigger")
}else{
    console.log('smaller')
}

//if-else if
//else if 키워드 : 여러 개 만들 수 있다.
if(5 < 3){
    console.log("smaller");
}else if(5 > 3){
    console.log("bigger");
}else if(5 == 3){
    console.log("same");
}

if(5 < 3){
    console.log("smaller");
}else if(5 > 3){
    console.log("bigger");
}else{
    console.log("same");
}


//퀴즈
//let score = 80;

let score = 99;

if(90 <= score){
    console.log("A");
}else if(80 <= score && score < 90){
    console.log("B");
}else if(70 <= score && score < 80){
    console.log("C");
}else if(60 <= score && score < 70){
    console.log("D");
}else{
    console.log("F");
}

//조건문 중첩
let userId = 'user';
let userPw = '1234';
let inputId = 'user';
let inputPw = '1234';

//아이디가 일치 
//  ㄴ 비밀번호 일치 -> 인사
//  ㄴ 비밀번호 불일치-> 불일치
//아이디가 불일치 -> 아이디 없음

if(userId = inputId){
    if(userPw = inputPw){
        console.log("반갑습니다. 안녕하세요");
    }else{
        console.log("비밀번호가 일치하지 않습니다.");
    }
}else{
    console.log("아이디 없음");
}

// step 1. (조건문) 홀짝을 구별하는 조건문 생성
// - n 변수를 선언하고 6 할당
// - num이 짝수라면 콘솔창에 "짝수" 출력
// - num이 홀수라면 콘솔창에 "홀수" 출력
let n = 6;

if(n % 2 == 0){
    console.log("짝수");
}else{
    console.log("홀수");
}

// step2. (함수 + if-esle 조건문) 짝수인지 판별하는 함수 isEven() 정의하고 호출하기
// - isEven() 함수는 매개변수 x 를 가짐
// - 매개변수 x의 값이 짝수라면, true 반환
// - 매개변수 x의 값이 홀수라면, false 반환

function isEven(x){
    if(x % 2 == 0){
        return "짝수";
    }else{
        return "홀수"
    }
}

console.log(isEven(8)); // true
console.log(isEven(7)); // false

// ======================================
// Q. (함수 + if-else if-else 조건문) 색상을 얻는 getColor() 함수 정의하고 호출하기
// - getColor() 함수는 매개변수 sign을 가짐
// - 매개변수 sign의 값이 'go'이면, 'green'을 반환
// - 매개변수 sign의 값이 'slow'이면, 'yellow'를 반환
// - 매개변수 sign의 값이 'stop'이면, 'red'를 반환
function getColor(sign){
    if(sign == "go"){
        return 'green';
    }else if(sign == 'slow'){
        return 'yellow';
    }else if(sign == 'stop'){
        return 'red';
    }
}

console.log(getColor("go"));
console.log(getColor("slow"));
console.log(getColor('stop'));

 // ======================================
  // (중첩 조건문)
  // Q.
  // - isValidate 함수는 비밀번호를 의미하는 pw1, pw2 두 개의 매개변수를 가짐
  // - pw1은 길이가 5 이상이라면,
  //      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
  //      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
  // - pw1의 길이가 5 미만이라면, '비밀번호는 5자리 이상!!!' 반환

function isValidate(pw1, pw2){
    if(pw1.length >= 5){
        if(pw1 == pw2){
            console.log("비밀번호 일치");
        }else{
            console.log("비밀번호 불일치");
        }
    }else{
        console.log("비밀번호는 5자리 이상!");
    }
}

  // 브라우저 콘솔창 확인 결과
  isValidate('1234', '1234'); // '비밀번호는 5자리 이상!!!'
  isValidate('12345', '12345'); // '비밀번호 일치~'
  isValidate('12345', '12345!!'); // '비밀번호 불일치..

// ======================================
console.log("-------------");
// Q. 바로 위에 문제에서 조건 추가!!
// 비밀번호 확인 조건이 추가되었습니다.
// - pw1은 길이가 5 이상이고 8이 이하라면,
//      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
//      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
// - pw1의 길이가 5 미만이거나 8 초과라면, '비밀번호는 5자리 이상 8자리 이하!!!' 반환
function isValidate2(pw1, pw2) {
    if(5 <= pw1.length && pw1.length <= 8){
        if(pw1 == pw2){
            console.log("비밀번호 일치~");
        }else{
            console.log("비밀번호 불일치..")
        }
    }else if(pw1 < 5 || pw1 > 8){
        console.log("비밀번호는 5자리 이상 8자리 이하!!");
    }
}
// 브라우저 콘솔창 확인 결과
isValidate2('1234', '1234'); // '비밀번호는 5~8자리만 가능!!!'
isValidate2('123456789', '123456789'); // '비밀번호는 5~8자리만 가능!!!'
isValidate2('12345', '12345'); // '비밀번호 일치~'
isValidate2('12345', '12345!!'); // '비밀번호 불일치..'