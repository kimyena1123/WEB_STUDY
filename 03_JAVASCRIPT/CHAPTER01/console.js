console.log('connected!');

//변수
// - 변할 수 있는 수. 정해진 값이 아닌 수. variable.
// - 데이터 보관함
// - 어떤 값을 저장하기 위한 메모리 공간을 "식별"하고자 붙인 이름이다.

//단계
// 1. 변수 선언
// 2. 값 할당

//var 키워드
// -중복 선언 가능.
var a; //선언
console.log(a); //undefined : 값을 할당하지 않은 경우 나타남.
a = 2; //할당
console.log(a); // 2

var a = 3; // 선언 + 할당 동시 진행, 재선언 --> 바람직하지 않은 콛.
console.log(a);
a = 4;
console.log(a);
a = 10;
console.log(a);

//var 문제점
// - 변수 재선언이 허용된다.(오류를 일으키지 않음.
// - 변수를 선언하기 전에 값을 할당이 허용됨(장점으로 보일 수도 있는데 유지보수에 있어서 최악임.)

aa = 123; //선언하지 않고 값을 할당.
console.log(aa);

//let 키워드
// - var와 다르게 변수 중복 선언이 불가능하다.
// - 재할당 가능

let c; // 선언
console.log(c); //undefined : 값 할당하지 않은 경우
c = 4; // 할당
console.log(c); //4

// let c = 4; --> 재선언X(중복 선언 불가능)

c = 5; // 값 재할당은 가능.
console.log(c); //5

//const 키워드
// - 재선언 X, 재할당 X
// - 선언과 할당이 동시에 일우어져야 한다!!!!!!!!
// - 변하지 않는 값을 변수에 저장할 때 사용
// - ex) const PI = 3.1415922653

// const b; --> error : 선언만 해서.
const b = 3;
console.log(b); //3

// b = 5; -> const에는 값 재할당 불가능.


// [QUIZ] 변수
// Q1. 코드 실행시 q1 변수는 어떤 값이 될까?
let q1 = 3;
q1 - 2;

// => 3

// Q2. 다음 코드 실행시 q2 변수는 어떤 값이 될까?
let q2 = 10;
q2 = q2 + 5;
q2 = q2 - 2;

// => 13

// Q3. 다음 코드 실행시 q3 변수는 어떤 값이 될까?
const q3 = 1;
// q3 = q3 + 1;

// => 1


/*
  정리
  - var: es6(2015) 이전에 사용되던 변수 선언 키워드 -> 지양하는 추세

  - let: 변수 선언 키워드
       - 변수 선언 -> 값 할당
       - 변수 중복 선언 불가능

  - const: 상수 선언 키워드
       - 상수: 변하지 않는 값 (ex. 3.14159265359, 'How are you?')
       - 변수 선언과 값을 할당이 동시에
       - 재할당 불가능
 */


// (추가) 식별자
// : 이름을 붙일 때 사용하는 단어(변수명, 함수명 등)

// 식별자 규칙
// 1.키워드 사용 불가능
//  -키워드 : 특별한 역할을 이미 하고 있는 단어
//  -ex. const, var, let, void, return ,for, while, if, else, ..

// 2. 숫자로 시작 x
// 3. 특수 문자 : _, $만 허용
// 4. 공백문자(space bar) X

// [QUIZ] 다음 중 식별자 불가능한 것은 모두 고르시오 
// apple
// 1apple       X
// let          X
// $apple
// APPLE
// apple5
// _            
// &
// apple good   X
// _apple
// Apple

/* 
1. snake_case
    user_id
2. cacelCase
    userId

        식별자에 단어 두 개 이상 작성하고 싶은경우?
            camelCase js 관례    
*/

//***************************************************************** */
console.log('********************************************');

//자료형
// - 데이터의 종류(data type)
// 1. 기본형 (primitive)
/*  -string
    -number
    -boolean
    -null
    -numdefined
*/
// 2. 객체형 (object)
/*
    -배열
    -딕셔너리
 */

//javascript 다른 언어와 달리 인터프리티(해석가)기 알아서 변수의 타입을 
//파악할 후 저장하여 변수의 타입을 따로 작성해주지 않아도 도니다.
//var, let, const 3가지 키워드를 이용해 변수를 "선언"한다.

//기본형
/*1. string - 문자열
    -텍스트 정보, 문자열
    - 따옴표로 감싸야 한다.(' '. " " 둘 다 가능)
    - 숫자, 특수 문자도 따옴표 안에 있으면 문자열
    - 따옴표 안에 따옴표 주의
    - ex. "그가 '안녕'이라고 말했다.", "I'm Sean"
*/

let text = '안녕하세요';
let text2 = "하이!";
let gender = "남자";
let address = "서울";

console.log(text);
console.log(text2);
console.log(gender);
console.log(address);
console.log(text + text2); // 띄어쓰기 없이 출력
// + : 문자열 합치기 연산자
console.log(text, text2); //공백 있이 출력

console.log(text + "저는 홍길동입니다. 저는" + gender + "이고, " + address + "에 거주하고 있습니다.");

//템플릿 리터럴
// : string 내 변수와 상수를 간결하게 표현
// 백틱('')기호와 &, {} 기호 사용
console.log(`${text} 저는 홍길동입니다. 저는 ${gender}이고, ${address}에 거주하고 있습니다.`)

/*
2. number
    -숫자(정수, 실수)
    -연산 가능
*/
let num = 100; //정수
let num2 = 0.12; //실수

let result = 100 -2;
console.log(result);

let result2 = 'apple' - 3;
console.log(result2); //NaN : Not a Number ( 숫자가 아님 )
// 숫자로 변환할 수 없는 것을 숫자로 바꾸려고 할 때 NaN!

/*
3. boolean(불, 불리언)
    -true, false 둘 중 하나의 값을 갖는 논리 요소
*/
let isWater = true;
let isApple = false;

/*
4. null
    -빈 값
    -null 타입ㅇ로 타입이 존재하지만 값이 없다.
    -값이 없다는 것을 "의도적으로 명시"할 때 사용
*/
let x = null;
console.log(x);

/*
5. undefined
    -값, 타입 모두 없다(값도 없고, 타입도 지정되어 있지 않은 상태)
    -
*/
let y;
console.log(y);

console.log('********************************************');
/*
    typeof() : 자료형 확인
*/

console.log(typeof('문자'));//string
console.log(typeof(245));   // number
console.log(typeof(true));  // boolean
console.log(typeof(null));  // object

console.log("'문자'의 자료형 : " + typeof '문자');


/*
    형변환
*/
console.log('********************************************');
// 1. ? -> 문자
let str1 = true;
let str2 = 123;
let str3 = null;

//string()
console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str2));

// toString()
console.log(typeof str1.toString());
console.log(typeof str2.toString());


//2. ? -> 숫자(data, 10진수) : data를 10진수로 변환
let n1 = true;
let n2 = false;
let n3 = 123;
let n4 = '123';

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(Number(n4));

console.log(parseInt(n3, 10));
console.log(parseInt(n4, 10));

console.log(typeof Number(n1));
console.log(typeof Number(n2));
console.log(typeof Number(n3));
console.log(typeof Number(n4));

console.log(typeof parseInt(n3));
console.log(typeof parseInt(n4));


//************************************************************ */
console.log('********************************************');


/*
    연산자
        -대입 : =
        -산술 : +, -, &, /
        -비교 : == , != , ===, !===, >, >=, <, <=
        -논리 : !, &&, ||
*/

//대입 연산자
// =
// 좌측 변수에 우측 값을 할당(저장, 대입)

//산술 연산자
// +, -, *, /
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2); // 주의 c언어랑 다름

console.log("나머지 연산자 : ",  2 % 10);
console.log("니머지 연산자 : " + (10 % 4));

console.log(3 ** 2); // 3^2
console.log(2 ** 10); //2^10