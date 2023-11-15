function call(name){

    return new Promise(function(resolve, reject){

        setTimeout(function(){
            console.log(name);
    
            resolve(name);
        }, 1000)
    })
}

function back(){
    return new Promise(function(resolve, reject){

        setTimeout(function(){
            console.log('back');
            resolve('back');
        }, 1000)
    })
    
}

function hell(){

    return new Promise(function(resolve, reject){
        
        setTimeout(function(){
            resolve('callback hell');
        }, 1000)
    })
    
}



// call('kim')
//     .then(function(result){
//         console.log(result + '반가워');

//         return back(result);
//     })
//     .then(function(result){
//         console.log(result + '을 실행했구나');

//         return hell(result);
//     })
//     .then(function(result){
//         console.log('여기는' + result);
//     })


    async function exec(){
       let user = await call('kim');
       console.log(user +  "반가워");
       let hi =  await back();
        console.log(hi + "을 실행했구나");
       let msg =  await hell(hi + "을 실행했구나");
        console.log("여기는 " + msg);
    }

    exec();
