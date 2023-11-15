// 1. setTimeout()
// setTimeout(code, delay)
// : delay(ms) 동안 기다리다가 code 함수를 실행한다.

//문제1) 1->3->2 순으로 출력
/*console.log(1);

setTimeout(function(){
    console.log(2);
}, 2000); //2000ms -> 2초

console.log(3);*/

//##############################################################

// 2. 비동기 처리
// ex. 편의점에 들어가서 음료수를 사고 나오는 상황

/*
function goMart(){
    console.log('마트에 가서 어떤 음료를 살 지 고민한다.');
}

function pickDrink(){
    //3초 고민하는 상황
    setTimeout(function(){
        console.log('고민 끝!');
        product = '제로 콜라';
        price = 2000;

    },3000); //3초
}

function pay(product, price){
    console.log(`${product} 제품의 가격은 ${price}이다.`);
}

let product;
let price;
goMart();
pickDrink();
pay(product, price);

*/


//##############################################################


// 3. 콜백 함수
// - 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// - JS에서는 어떤 함수의 "매개변수"로 쓰일 수 있다. 

//위 예시 코드에서 undefined가 뜨지 않도록 해보자!
//즉, 비동기 방식으로 작성된 코드를 '동기 처리' 할 수 있도록
/*
function goMart(){
    console.log('마트에 가서 어떤 음료를 살 지 고민한다.');
}

function pickDrink(callbackF){
    // callback: 매개변수가 될 콜백함수

    //3초 고민하는 상황
    setTimeout(function(){
        console.log('고민 끝');
        product = '제로 콜라';
        price = 2000;

        callbackF(product,price); //pay. 즉, 여기서의 callback 함수는 다음에 실행될 함수라고 생각하면 된다.
    },3000); //3초
}

function pay(product, price){
    console.log(`${product} 제품의 가격은 ${price}이다.`);
}

let product;
let price;
goMart();
pickDrink(pay);
*/


//##############################################################


// 4. 콜백 지옥
// : 콜백 함수가 반복되어서 코드의 들여쓰기가 깊어짐
// -> 가독성 / 유지보수성 하락
// 1초마다 배경색이 변경되는 코드
// red -> orange -> yellow -> green -> blue

//1초 기다렸다가 body 배경색이 red로 변경
setTimeout(function(){
    document.body.style.backgroundColor = "red";

    setTimeout(function(){
        document.body.style.backgroundColor = 'orange';

        setTimeout(function(){
            document.body.style.backgroundColor = 'yellow';

            setTimeout(function(){
                document.body.style.backgroundColor = 'green';

                setTimeout(function(){
                    document.body.style.backgroundColor = 'blue';
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
},1000)


return new Promise(function(resolve, reject){
    setTimeout(function(){
        document.body.style.backgroundColor = "red";

        resolve();
    },1000)
    setTimeout(function(){
        document.body.style.backgroundColor = 'orange';

        resolve();
    },1000)
    setTimeout(function(){
        document.body.style.backgroundColor = 'yellow';

        resolve();
    },1000)
    setTimeout(function(){
        document.body.style.backgroundColor = 'green';

        resolve();
    },1000)
    setTimeout(function(){
        document.body.style.backgroundColor = 'blue';
        
    },1000)
})