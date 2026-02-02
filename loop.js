// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let k = 9; k > -1; k--) {
//     console.log(k);
// }

// for (let j = 1; j <= 10; j++) {
//     console.log("Hello");
// }



// while loop -- do while loop
// kaya thi javanu che --> kaya rokavanu che --> kevi rite javanu che
// while (ex. 1 -> Hello world -> stop when condition false)

// start
// while (end) {
//   code
//   change
// }

// let d = 1;
// while (d <= 10) {
//     console.log("while loop: ", d);
//     d++;
// }

// let c = 50;

// while (c >= 20) {
//     console.log(c);
//     c--;
// }


// let d = 0;

// while (d <= 20) {
//     console.log(d);
//     d++;
// }

// let f = 50;
// while (f <= 60) {
//     console.log(f);
//     f++;  
// }

// let q = 50;
// while (q <= 60) {
//     console.log(q);
//     q++;
// }



let j = 12; // start

do {
    console.log("do while loop:", j);
    j++; // change (condition)
} while (j < 20); // condition check happens AFTER running code


for (let k = 1; k <= 201; k++) {
    console.log("Loop with break", k);
    if (k === 30) {
        break;
    }
}


// continue
for (let a = 1; a <= 10; a++) {
    if (a === 5) {
        continue;
    }
    console.log(a);
}
