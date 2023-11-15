function changeBody(color){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            document.body.style.backgroundColor = color;
    
            resolve(color);

        },1000)
        
    })

}

changeBody('red')
    .then(function(){
        return changeBody('orange');
    })
    .then(function(){
        return changeBody('yellow');
    })
    .then(function(){
        return changeBody('green');
    })
    .then(function(){
        return changeBody('blue');
    })