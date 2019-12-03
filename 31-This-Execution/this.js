console.log("this")

// function sayName() {

//     console.log(`Hi my name is ${this.first}`)
// }


let newVar = () => { console.log("IIFE"); return 1 }

// let condition = true ? console.log("true") : console.log("false")
let Ken = {
    first: "Ken",
    last: "Averbookh",
    sayName: sayName
}

let Jallen = {
    first: "Jallen",
    last: "Messersmith",
    sayName: sayName,
}
// whatIsThis()
let boundedSayName = sayName.bind(Ken)
// boundedSayName = boundedSayName.bind(Jallen)
// Jallen.boundedSayName = boundedSayName
console.log(Jallen.sayName())
// Jallen.newBoundSayName

