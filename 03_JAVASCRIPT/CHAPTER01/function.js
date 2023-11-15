// 함수
// : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
// 2단계 : 함수 정의 -> 함수 호출

// 함수 정의
/*
    function 함수이름(){
        //do something
    }

    //함수 호출(사용)
    함수이름();
*/

//함수 선언시
function helloWorld(){
    console.log("hello World11");
}

helloWorld();

//_________________________________________
//함수 표현식
const hellowWorld2 = function(){
    console.log("hello World22");
}

hellowWorld2();

//_________________________________________
function helloWorld3(){
    return "hello World33";
}

console.log(helloWorld3());

//_________________________________________
const hellowWorld4 = function(){
    return "hello World44";
}

console.log(hellowWorld4());


//_________________________________________


// 다양한 함수 만들기
//case 1. 매개변수 (인자 1개)

function hello1(text){
    return text;
}

console.log(hello1("안녕1"));

//alert(hello1("안녕!!"));

//case 2. 매개변수(인자 2개)

function hello2(text, name){
    let result = `${text} 나는 ${name}야`;
    
    return result;
}

console.log(hello2("안녕?", "김예나"));


//case 3. return 없이 함수에서 바로 console.log() 찍기

function hello3(text, name){
    console.log(`${text} 나는 ${name}야`);
}

hello3("안녕??","김예나");

//******************************************************


// case 4. case2를 함수 표현식 hello4
const hello4 = function(text, name){
    let introduce = `${text} 나는 ${name}야`

    return introduce;
}

console.log("case 4: " + hello4("안녕??", "예나"));


//case 5. case3를 함수 표현식 hello5
const hello5 = function(text, name){
    console.log(`case 5: ${text} 나는 ${name}야`);
}

hello5("안녕?", "예나");

//주의
    // 하나의 js 파일에서 동일한 함수의 이름을 정의하지 않기
    // 항상 함수를 정의 -> 호출



//******************************************************

function countNum(){
    let count = 7; // 함수 안에서 변수 선언 + 할당
    console.log("count 값 : " + count);
}

countNum();

//console.log("count 값 : " + count);

//함수 안에서 선언한 변수는 함수 안에서만 유효하다. <= 지역변수
//지역변수는 함수의 body를 벗어나면 접근할 수 없다. 


let count2 = 0; //전역 변수
console.log("함수 시작 전 count: "+ count2);

function countNum2(){
    count2 = 77;

    console.log("함수 내에서의 count2 : "+ count2);
}

countNum();
//만약 함수 안에서 사용되는 변수가 함수 바깥에서도 쓰인다면 "전역변수"

let color = 'red';
function printColor(){
    let color = 'green';

    console.log("color: " + color);
}
printColor();
console.log("함수 바깥 color : " + color);
//지역변수와 전역변수의 이름이 동일한 상황
//함수 안에서는 지역변수를 사용

let animal = 'dog';

function who(){
    let animal = 'cat';
    console.log('함수 내 animal :' + animal); // cat
}

who();
console.log("함수 바깥 animal : "+ animal);

//******************************************************


//문자열 속성과 메서드(함수)
// : 자바스크립트에서 기본제공하는
//문자열(string)에서 사용가능한 편리한 기능

console.log("------------------------------------------");

//속성
//length : 문자열의 길이

var song = "Strawvery Moon";
var song2 = "Strawvery Moon!!!";
console.log("song의 문자열 길이: " + song.length);
console.log("song2의 문자열의 길이: "+ song2.length);


//XX.method()의 형태
// - toUpperCase(): 대문자로 변경
// - toLowerCase(): 소문자로 변경
// - trim() : 양끝 공백 제거

var msg = "Happy Birthday";
var userId = '      user123 ';

console.log(msg.toUpperCase()); //다 대문자로 출력
console.log(msg.toLowerCase()); //다 소문자로 출력

console.log(userId);
console.log(userId.length);
console.log(userId.trim());
console.log(userId.trim().length);

//참고! 연달아서 사용 가능
var msg2 = "  hello world!";
console.log(msg2.trim().toUpperCase());
//msg2 변수의 양끝 공백 제거 -> 대문자로 변경

//인덱싱(indexing)
//: string에서 한글자를 선택 가능
//변수명[위치값]
//위치값: 숫자 0부터 시작
console.log(song); //Strawvery Moon
console.log(song[0]);
console.log(song[0] + song[7]);
console.log(song[0].length);
console.log(song[0].toLocaleLowerCase());

for(let i = 0; i < song.length; i++){
    console.log(song[i]);
}


// 퀴즈 sonny 단어 만들기
console.log("sonny 만들기 : " + song[0] + song[12] + song[13] + song[13] + song[8]);



//=================================================
console.log("_----------------------------------------------");

//XX.method(arg) 형태
// - indexOf("x") : string에서 x가 나타내는 인덱스(위치값 반환)
// - slice(startIndex) : startIndex에서부터 끝까지 문자열을 잘라내어 반환
// - replace("교체될값", "고체되어 들어가는 값") : 처음 발견된 값을 교체
// - replaceAll("고체될 값", "고체되어 들어가는 값") : 발견한 값을 모두 찾아서 교체

var fruit = "applemango";
var msg3 = "Wow~ It is so amazing~~!!";

console.log(fruit.indexOf('a'));
console.log(fruit.indexOf("l"));
console.log(fruit.indexOf('mango'));
console.log(fruit.indexOf("x")); // 없는 단어 x. x가 없다면 -1 변환

console.log(fruit.slice(5));
console.log(fruit.slice(-1));
console.log(fruit.slice(-3)); //ngo : -3 ~ -1

console.log(msg3.replace("Wow", "hey"));
console.log(msg3.replaceAll('a', 'A'));


//퀴즈) 2022.9.26 -> 2022-9-26
//퀴즈2) 2022.9.26 ->22-9-26

let msg4 = '2022.9.26';

console.log("퀴크1 : " + msg4.replaceAll(".", "-"));
console.log("msg4: " + msg4);
console.log("퀴즈2 : " + msg4.slice(2).replaceAll(".", "-"));