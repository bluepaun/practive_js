
function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}


const greetNicolas = sayHello("Nicolas", 22);

const re = console.log(greetNicolas);

const calculator={
    plus: function(a, b){
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiple: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    lease: function (a, b) {
        return a % b;
    }
}

console.log(calculator.plus(2,3));
console.log(calculator.minus(2,3));
console.log(calculator.multiple(2,3));
console.log(calculator.divide(2,3));
console.log(calculator.lease(2,3));