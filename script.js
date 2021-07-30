'use strict';
let num = +prompt('Скільки чисел послідовності ви хочете просумувати?');
let qn = +prompt('Введіть знаменник прогресії');

let b1 = 1;
let geom = function (n, q) {

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += b1;
        // console.log(b1);
        b1 *= q;
    }
    return sum;
}

console.log(`Сумма прогресії = ${geom(num, qn)}`);

alert('Варіант 2');

let num2 = +prompt('Скільки чисел послідовності ви хочете просумувати?');
let qn2 = +prompt('Введіть знаменник прогресії');
let sum2 = 0;
let geom2 = function (n, q) {
    const a1 = 1;
    let pow = (num, degree) => degree <= 0 ? 1 : num * pow(num, degree - 1);
    return (a1 * (1 - pow(q, n)) / (1 - q));
    // якщо пишу так, то каже , що n не ідентифіковане і не працює? як передати n та q ?
    // return a1 * (1 - function pow(number = q, deg = n) {

    //     if (deg <= 0) {
    //         return 1
    //     }
    //     return number * pow(number, deg - 1);
    // }) / (1 - q);
}
console.log(`Сумма прогресії = ${geom2(num2, qn2)}`);

