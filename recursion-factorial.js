// 6! = 6 * 5 * 4 * 3 * 2 * 1

// for loop
for (let i = 6; i >= 1; i--) {
    console.log(i);
}
// multiplecation for loop
let factorial = 1;
for (let i = 6; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial);

// function recursive diye korle
function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return factorial(i - 1) * i;
}
console.log(factorial(6));