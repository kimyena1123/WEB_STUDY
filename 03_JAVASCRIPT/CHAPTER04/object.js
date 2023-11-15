console.log("connected@");

// JS 표준 내장 객체
// 기본적으로 (이미) 가지고 있는 객체
// String, Number, Array, Date, Math, ...

//#############################################################

// Date 객체
// 시간, 날짜에 대한 정보를 얻기 위함.
let now = new Date();
console.log(now); 

//ms
console.log(new Date(0)); //1970년 1월 1일 9시 0분 0초를 기준으로.
console.log(new Date(80000)); //Thu Jan 01 1970 09:01:20

//new Date(y, m, d, h, m, s, ms)
//year: 4자리
//month : 0(1월) ~11(12월)
//date : 1~31 -> 생략하면 1으로 처리
//hour, minutes, seconds, ms
console.log(new Date(2018, 2, 2));
console.log(new Date(2018, 2, 2, 18, 20, 30));
console.log(new Date(2022, 8, 30, 10, 53));

console.log("------------------------------------------");

//Date 객체 메서드
//메서드를 이용해서 년,월,일 등의 값을 얻기
console.log(now);

//현재 2023년 11월 9일
console.log(now.getFullYear()); //2023
console.log(now.getMonth()); //10(11월)
console.log(now.getDate()); // 9
console.log(now.getHours()); //18(6시)
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); // 0(일) ~ 6(토) 요일

//퀴즈
let day = new Date();

if(0 < day.getDay() && 6 > day.getDay()){
    console.log("평일입니다.");
}else{
    console.log("주말입니다.");
}

//switch문
switch(day.getDay()){
    case 0:
    case 6:
        console.log("주말입니다.");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('평일입니다.');
        break;
    default:
        console.log("알 수 없다");
        break;
}

//#############################################################
console.log("------------------------------------------");


//Math 객체
//수학적인 상수와 함수를 위한 속성과 메서드

//속성
console.log(Math.E); //자연로그 밑
console.log(Math.PI); // 파이
console.log(Math.SQRT2); //2의 제곱근

//메서드
console.log(Math.min(100,200,30,7)); //최솟값 7
console.log(Math.max(100,200,30,7)); //최댓값 200

console.log(Math.round(6.5)); // 7
console.log(Math.round(6.3)); // 6

console.log(Math.floor(6.5)); // 6
console.log(Math.floor(6.3)); // 6

console.log(Math.ceil(6.5)); // 7
console.log(Math.ceil(6.3)); // 7

//메서드를 메서드로 감싸서도 사용 가능
console.log(Math.floor(Math.max(1.1, 2.2, 3.3, 7.7))); // 7

console.log(Math.random()); //랜덤 값을 준다. 0 <= x < 1 범위의 난수

//0 <= x < 10 (0~9)
console.log(Math.floor(Math.random() * 10));

// 0 ~ 99
console.log(Math.floor(Math.random() * 100)); 

//0 ~ 10
console.log(Math.floor(Math.random() * 10 + 1));

//1~10
console.log(Math.floor(Math.random() * 10) + 1);

//1 ~ 100
console.log(Math.floor(Math.random() * 100) + 1);

//20 ~ 22
console.log(Math.floor(Math.random() * 3)); // 0 ~ 2

console.log(Math.floor(Math.random() * 3) + 20); //20 ~ 22