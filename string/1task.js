// Count how many times a string has the letter a

let string = 'Count how many times a string has the letter a'
let splited = string.split('')
let Count = '';

for (i = 0; i <= splited.length; i++) {
    if (splited[i] !== 'a') {
        continue;
    }
    Count = Count + splited[i]
}
console.log(Count.length);

// simple by solution
// let count = 0;
// for (i = 0; i < splited.length; i++) {
//     if (splited[i].includes('a')) {
//         count++
//     }
// }
// console.log(count);

