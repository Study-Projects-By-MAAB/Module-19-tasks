// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let string = "If a given string has either x, replace x by y. if the given string has X, replace it by Y."

let splited = string.split('')
let replaced = ''
let final = ''
// console.log(splited);
for (i = 0; i < splited.length; i++) {
    if (splited[i].includes('x')) {
        splited[i] = "y";
    }
    replaced = replaced + splited[i];
// console.log(replaced);

    if (replaced[i].includes("X")) {
        replaced[i] = "Y";
    }
    final = final + replaced[i]
    console.log(final);
}


// for (i = 0; i < splited.length; i++) {
//     if (splited[i].includes("X")) {
//         splited[i] = "Y";
//     }

//     replaced = replaced + splited[i]
// }
// console.log(replaced);














// if (string.includes('x')) {
//     console.log(string.replace(/x/g, 'y'));
// }
// if (string.includes('X')) {
//     console.log(string.replace(/X/g, 'Y'));
// }