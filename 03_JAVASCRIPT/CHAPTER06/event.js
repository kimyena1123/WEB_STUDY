console.log("connect");

// 이벤트(event)
// : 사용자들의 행동에 반응하는 작업
// ex) 클릭, 더블클릭, 폼 제풀 등...

// 이벤트리스너(event listener)
// : 이벤트가 발생했을 때 실행할 함수
// 1. 인라인 방식
// 2. onXX 속성 방식
// 3. addEventListener() 메소드 방식



// 1. 인라인 방식
function showAlert(){
    alert('버튼1 클릭');
}

// 2. 속성(프로퍼티) 방식
let btn = document.querySelector('#btn2'); // <button>

btn.onclick = function(){
    alert('버튼2 클릭');
}

// 3. addEventListener() 메서드 방식
// addEventListenr(type, listener)
// ㄴ type : 이벤트 종류(클릭, 더블클릭, ..)
// ㄴ listener : 이벤트 발생시 처리할 함수

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function(){
    alert('버튼3 클릭');
})




// 이벤트 등록 연습
//function colorchange(){
//     let span1 = document.querySelector('#span1');
//     span1.style.color = 'blue';
// }


// let span2 = document.getElementById('span2');
// span2.style.backgroundColor = 'pink';


// let span3 = document.getElementById('span3');
// span3.addEventListener('mouseover', function(){
//     span3.style.fontSize = '50px';
// })


//mousever // dblclick(=ondblclick)
function colorchange(){
    let span1 = document.querySelector('#span1');
    span1.style.color = 'blue';
}


let span2 = document.getElementById('span2');
span2.ondblclick = function (){
    span2.style.backgroundColor = "pink";
}


let span3 = document.getElementById('span3');
span3.addEventListener('dblclick', function(){
    span3.style.fontSize = "50px";
})