
//Заполните массив числами от 10 до 1 с помощью цикла.
let arr1=[]
for (let i=1; i<=10; i--){
    arr1.push(i)
}
console.log(arr)
//Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
let arr=[5,-7,12,1,-3,2,-4]
let sum=0
for (let elem of arr){
    if (elem>0){
        sum+=elem
    }
}
console.log(sum)
//Дан массив числами, например:

let arr2 = [10, 20, 30, 50, 235, 3000];
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5
for (let elem of arr2){

}
//Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push( callback(elem) ); // вызываем функцию-коллбэк
    }

    return result;
}

console.log(each([1,2,3,4],function (num){return num*2}))
// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(a) {
return function (b){
    return a+b
}

}
alert(sum(3)(6))
// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3


function makeCounter() {
    let count=0
    return ()=>{
        console.log(++count)
    }
}
const counter = makeCounter();
console.log(counter())
console.log(counter())
const counter2 = makeCounter()
console.log(counter2())
console.log(counter())