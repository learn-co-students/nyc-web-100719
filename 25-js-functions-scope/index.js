
// function manicMonday() {
//     return {}
// }

// let day = "Monday"
// manicMonday()

//first class object/citizen
// let obj = {}
// [obj, 1, 3]

// console.log(day)
//Global scope, function scope, block scope
function multiplyByN(multiplier) {
    return function (number) {
        return number * multiplier
    }
}


function multiplyBy5(num) {
    return num * 5
}



//IIFE => Immediately Invoked Function Expression
// function variableFunc(){do some code stuff}
