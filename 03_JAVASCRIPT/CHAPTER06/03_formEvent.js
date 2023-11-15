//이벤트 객체
//event
//이벤트가 발생하면, 브러우저는 발생한 이벤트에 대한 정보를 담은 
//이벤트 객체(event object)를 이벤트 리스너에게 전달한다. 

const clickMe = document.querySelector('#clickme');
clickMe.addEventListener('click', function(event){
    console.log(event);
    //event : 이벤트 객체에 대한 정보를 담고 있다.
});

//=======================================================


const todoForm = document.querySelector("#todo-form");
const ul = document.querySelector(".todos");

todoForm.addEventListener("submit", function(event){
    //form의 submit 이벤트는 제출되는 것이 기본 동작이다.
        //제출 : 새로고침
        //console.log("Add 버튼 클릭");

    //preventDefault : 브라우저에서 구현된 기본 동작을 취소해준다. 
    //폼 이벤트 : 폼이 제출되면 새로고침되는 기본 동작을 취소
    event.preventDefault();

    const todoInput = document.querySelector('input[name="todo"]');
    console.log(todoInput); // 태그 내용을 보여줌
    console.dir(todoInput); // 객체에 대한 정보를 tree 구조로 보여준다.
    console.log(todoInput.value);

    let todo_content = todoInput.value; // 사용자가 input에 입력한 값
    console.log(todo_content);

    //li 태그를 만들어서, li 태그의 content로 input.value 값이 담기도록

    const newTodo = document.createElement('li'); // <li></li> 태그 생성
    newTodo.innerText = todo_content; // <li>사용자가 입력한 값이 li 태그에 담김</li>

    ul.append(newTodo); // li 태그들이 ul 태그에 연결되어 담김

    //input창 초기화
    todoInput.value = ''; // input의 value를 빈 문자열로 설정 초기화
})



//=======================================================

const form = document.querySelector("#form");
const email_ul = document.querySelector(".mail_list");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const emailInput = document.querySelector('input[name="email"]');
    console.log(emailInput);
    console.log(emailInput.value);

    let addEmail = emailInput.value;
    console.log(addEmail);

    const newEmail = document.createElement('li');
    newEmail.innerText = addEmail;

    email_ul.append(newEmail);
    
    //input창 초기화
    emailInput.value='';
})


//=======================================================

const chgInput = document.querySelector('#change_input');

chgInput.addEventListener("input", function(){
    // input : 입력창에 변경이 일어나는 순간을 계속 감지
    const div = document.querySelector('.intro');
    div.textContent = chgInput.value;
})

const textarea = document.querySelector('#textarea');

textarea.addEventListener('input', function(){
    const p = document.querySelector('.text_area');
    p.textContent = textarea.value;
})


//=======================================================

const keyInput = document.querySelector('#key_input');
keyInput.addEventListener("keydown", function(event){
    //keydown : 키를 누르고 있을 때
    console.log(event);
    console.log(event.code);

    if(event.code === 'ArrowUp'){
        console.log('UP!');
    }
    else if(event.code ==='ArrowDown'){
        console.log("Down");
    }
    else if(event.code === 'ArrowRight'){
        console.log("Right");
    }
    else if(event.code === "ArrowLeft"){
        console.log("Left");
    }
    else{
        console.log("others");
    }
})