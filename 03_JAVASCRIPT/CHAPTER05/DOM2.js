function addNode(){
    let div = document.getElementById('div1');

    //요소 생성하기
    let p = document.createElement('p'); // p 태그 생성
    p.innerText = '버튼을 눌러 만들어진 p 태그'; 
    p.style.fontWeight = '700';
    p.classList.add('append-p');

    //div.appendChld(p); //p의 부모요소인 div에 p를 넣는다.
    div.append(p);
}

function removeNode(){
    let div = document.querySelector('#div1');
    let p = document.querySelector('#div1 > p'); //div`을 가지고 있는 자식요소 p를 선택

    //div.removeChild(p);
    p.remove();
}



//노드 생성 / 추가 / 삭제

    // 1. 노드 생성
    // createElement()

    // 2. 노드 추가
    // appendChild() : 노드 객체만 추가, 한 번에 한 개만
    // append() : 노드 객체 or 텍스트 추가, 한 번에 여러 개 가능

    // 3. 노드 삭제
    // 부모노드.removeChild(자식노드) : 부모요소의 자식노드를 삭제
    // 노드.remove() : "선택한 요소"를 삭제



//=======================================

let ul = document.querySelector('ul');
let li = document.createElement('li'); // li 태그 생성

li.innerHTML = "오렌지";

ul.append(li);


//=======================================

let container = document.querySelector('.container');
let img = document.createElement('img'); // img 태그 생성

img.setAttribute('src', 'beach1.jpg');
img.setAttribute('alt', '바다');
img.setAttribute('width', '300');

let title = document.createElement('div'); // div 태그 생성
title.innerText = '바다입니다!';

container.append(title);
container.append(img);