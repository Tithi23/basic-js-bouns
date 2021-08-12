// (1-6)
for (let i = 0; i <= 6; i++) {
    console.log(i);
}

// (1-6)+every value r sathe 1 add increse
let sum = 0;
for (let i = 0; i <= 6; i++) {
    sum = sum + i;
}
console.log(sum);

// aibar ulta dik thake asbo decrese
for (let i = 0; i >= 6; i--) {
    console.log(i);
}
//
let sum = 0;
for (let i = 0; i >= 6; i--) {
    sum = sum + i;
}

console.log(sum);


// aitai function recursive er moddhe korle
function sum(i) {
    if (i == 1) {
        return 1;
    }
    return sum(i - 1) + i;
}
console.log(sum(6));
