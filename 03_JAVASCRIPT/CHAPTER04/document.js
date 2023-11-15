console.log("connected");

//document 객체
//속성

console.log(document.documentElement); // html 태그를 반환해준다.
console.log(document.head); //head 태그를 반환
console.log(document.body); //body 태그를 반환

console.log(document.URL); //웹페이지 전체 url 반
console.log(document.domain) //url에서 도메인 반환

//url > domain

//html 요소 선택하는 
// = dom 요소 선택하기(DOM API)

//노드 객체 가져오기
//getElementID(아이디명) : 아이디 이름으로 요소 가져오기
//id는 유일하므로 속도가 가장 빠르다
//읽기 : 요소.innerHTML
//쓰기 : 요소.innerHTML = 수정하려는 태그
console.log(document.getElementById('first'));
console.log(document.getElementById('second'));
console.log(document.getElementById('third'));
console.log(document.getElementById('fourth'));
console.log(document.getElementById("fifth"));

//2. getElementByClassName(클래스명) :
console.log(document.getElementsByClassName("korean"));
console.log(document.getElementsByClassName('bunsik'));
console.log(document.getElementsByClassName('dessert'));
console.log(document.getElementsByClassName('korean')[0]);
console.log(document.getElementsByClassName('korean')[1]);

//3. getElementByTagName(태그명) : 태그 이름으로 요소 가져옴
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h2'));
console.log(document.getElementsByTagName('li'));

console.log(document.getElementsByTagName('li')[2]); // 돈까쓰

//4. getElementsByName(name 속성값)
console.log(document.getElementsByName('userId'));
console.log(document.getElementsByName('userId')[0]);
console.log(document.getElementsByName('userId')[0].value);


// "css" 선택자를 이용해 노드 객체 가져오기
//querySelector(css 셀렉터) : 일치하는 "첫번째" 요소를 가져온다.
console.log(document.querySelector('.korean'));
console.log(document.querySelector('.bunsik'));
console.log(document.querySelector('.dessert'));

console.log(document.querySelector('input[name="userId'));
console.log(document.querySelector('input[id="userId'));

//querySelectorAll(css 셀렉터) : 일치하는 "모든 요소"를 배열로 가져옴
console.log(document.querySelectorAll('.korean'));
console.log(document.querySelectorAll('.korean')[0]);
console.log(document.querySelectorAll('.korean')[1]);
console.log(document.querySelectorAll('.bunsik'));
console.log(document.querySelectorAll('.dessert'));

console.log(document.querySelectorAll('.launch-list #third'));

var heading = document.querySelector('#first');
heading.style.color = 'red';

var heading2 = document.getElementById('second');
heading2.style.color = 'green';