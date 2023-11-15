// async / await

//기본구조
async function 함수명(){
    await 비동기_처리_메소드();
}

//async 키워드
// - 함수를 비동기 함수로 선언해준다.
// - 프로미스를 반환하지 않더라도 자동으로 프로미스를 반환함으로 암시한다.
// - 반환값(return ?)이 있으면 resolve
// - 오류가 있으면 rejected가 된다.


//await 키워드
// - 대기 키워드이다(기다리게 함) : 비동기 코드를 동기적으로 보이게 한다.(시간이 걸리는 작업을 기다려주는 것이다.)

// => async/await는 세트이다. 같이 사용해야 한다!!

function goMart(){
    console.log('마트에 가서 어떤 음료를 살 지 고민한다.');
}

function pickDrink(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('고민 끝!');

            product = '제로 콜라';
            price = 2000;

            resolve(); //pay ,즉 여기서의 callback함수는 다음에 실행될 함수라고 생각하면 된다.
        }, 3000); // 3초
    })
}

function pay(){
    console.log(`${product} 제품의 가격은 ${price}이다.`);
}

goMart();
pickDrink().then(pay)
//pickDrink().then(pay).catch(nopay)l

async function exec(){ //await는 async가 실행되는 함수 안에 선언되어야 한다.
    goMart();
    await pickDrink(); //3초 시간이 걸리는 작업
    pay();
}

exec();