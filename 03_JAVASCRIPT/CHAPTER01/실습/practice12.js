let no_1 = 1;
let no_2 = 2;
let no_3 = 3;

let add_result = 0;
let sub_result = 0;
let divide_result = 0;
let mul_result = 0;

console.log("no_1 = " + no_1);
console.log("no_2 = " + no_2);
console.log("no_3 = " + no_3);


const add = function(num1, num2, num3){
    add_result = num1 + num2 + num3;
    alert("no_1 + no_2 + no_3 = " + add_result);

    return add_result;
}

console.log("no_1 + no_2 + no_3 = " + add(no_1, no_2, no_3));

const sub = function(num1, num2){
    sub_result = num1 - num2;
    alert("no_1 - no_2 = " + sub_result);

    return sub_result;
}

console.log("no_1 - no_2 = " + sub(no_1, no_2));

const divide = function(num1, num2){
    divide_result = num1 / num2;
    alert("no_1 / no_2 = " + divide_result);

    return divide_result;
}

console.log("no_1 / no_2 = " + divide(no_1, no_2));

const mul = function(num1, num2){
    mul_result = num1 * num2;
    alert("num1 * num2 = " + mul_result);

    return mul_result;
}

console.log("num1 * num2 = " + mul(no_1, no_2));