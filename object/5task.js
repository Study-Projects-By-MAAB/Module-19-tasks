// Loop through an object and print the key-value pairs with their types


let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

let key = Object.keys(myObject);
let value = Object.values(myObject)

for (id = 0; id < key.length; id++) {
    let output = `key: ${key[id]} | type: ${typeof (value[id])} `
    console.log(output)
}