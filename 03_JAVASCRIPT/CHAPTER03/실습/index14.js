console.log("connected");

let result = 0;

for(let i = 1; i < 100; i++){
    if(i % 2 === 0 || i % 3 === 0){
        result += i;
    }
}
console.log(result);