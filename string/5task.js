// Capitalize Every first Letter of each word in a String

let string = "Capitalize Every first Letter of each word in a String"

let word = string.split(" ")
// console.log(word);
for (i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1)
}
console.log(word.join(" "));