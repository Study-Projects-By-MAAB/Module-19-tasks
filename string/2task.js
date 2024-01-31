// Count how many times a string has the letter a or A

let string = "Count how many times a string has the letter a or A";
let count = 0;

for (i = 0; i < string.length; i++) {
    if (string[i].includes("a") || string[i].includes("A")) {
        count++;
    }
}
console.log(count);
