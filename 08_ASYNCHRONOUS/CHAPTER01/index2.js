// 1. 프로미스(Promise)
// 비동기 함수를 동기 처리하기 위해 만든 객체
// - 성공, 실패를 분리해서 반환
// 성공이든 실패이든 무언가의 "최종 결과"를 알려준다. 
// - fulfilled(resolve): 성공
// - rejected : 실패

// promise 객체를 반환하는 promise1 함수 정의
/*
function promise1(flag){
    return new Promise(function(resolve, reject){
        if(flag == true){
            resolve(`promise 상태는 fulfilled : then()으로 연결된다.`);
        }// true
        // resolve -> then으로 연결
        else{
            reject(`promise 상태는 rejected! catch()으로 연결된다.\n 이때 flag가 ${flag}이다.`);
        } // false
        //reject -> catch로 연결
    })
}

promise1(false) // ture,false // 괄호에 조건식이 들어갈 수 있다.
.then(function(result){
    console.log(result);
})
.catch(function(err){
    console.log(err);
})
*/


// ############################################################################################


// Promise 사용법
// index.js에서 "콜백 함수"를 이용해 동기처리한 것을 
// "promise"를 이용해 동기처리 하기
/*
function goMart(){
    console.log('마트에 가서 어떤 음료를 살 지 고민한다.');
}

function pickDrink(){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('고민 끝!');
            product = '제로 콜라';
            price = 4000;

            resolve(); //pay ,즉 여기서의 callback함수는 다음에 실행될 함수라고 생각하면 된다.

            //reject도 사용하려는 경우
            // if(price <= 2000){
            //     resolve();
            // }else{
            //     reject();
            // }
        }, 3000);
    })
}

function pay(){
    console.log(`${product} 제품의 가격은 ${price}이다.`);
}

//reject도 사용하려는 경우
function nopay(){
    //console.log(`${product} 제품의 가격은 ${price}이다.비싸서 안산다.`);
}

let product;
let price;

goMart();
pickDrink().then(pay);
//pickDrink.then(pay).catch(nopay);
*/


// ############################################################################################


// 3, promise 체이닝

//ex. 함수를 이용해 (4 + 3) * 2 - 1 = 13
// add -> mul - sub 순으로 연산 필요

/*
function add(n1, n2, callback){
    setTimeout(function(){
        let result = n1 + n2; // 7

        callback(result); //여기서 callback 함수는 다음 계산을 해주는 mul 함수를 의미한다.
    }, 1000)
}

function mul(n, callback){
    setTimeout(function(){
        let result = n * 2; // 7 * 2 = 14

        callback(result); //여기서 callback함수는 다음 계산으로 도와주는 sub 함수를 의미한다. // callback(14)
    }, 700)
}

function sub(n, callback){
    setTimeout(function(){
        let result = n - 1; // 14 - 1 = 13 

        callback(result); // callback(13);
    }, 500);
}

//step1. 콜백함수 사용

add(4, 3, function(x){ // add 함수 정의부의 callback(result)
    console.log("1 :" + x); // 7; 

    mul(x, function(y){ // mul 함수 정의부의 callback(result)
        console.log('2 : ' + y);

        sub(y, function(z){
            console.log('3 : ' + z); // sub 함수 정의부의 callback(result)
        })
    })
})
*/

//step2. promise 체이닝 사용

function add(n1, n2){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let result = n1 + n2;

            resolve(result);
        }, 1000);
    })
}

function mul(n){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let result = n * 2;

            resolve(result);
        }, 700);
    })
}

function sub(n){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let result = n - 1;

            resolve(result);

            //reject(new Error('의도적으로 에러를 일으켜봤음!'));
        }, 500);
    })
}



// add(4, 3).then(function(result){
//     console.log('1: '+ result);
//     return mul(result);
// }).then(function(result){
//     console.log('2: ', result);
//     return sub(result);
// }).then(function(result){
//     console.log('3: ', result);
// });



add(4, 3)
    .then(function(result){
        console.log("1: " + result);

        return mul(result);
    })
    .then(function(result){
        console.log("2: " + result);

        return sub(reseult);
    })
    .then(function(result){
        console.log("3: "+ result);
    })
