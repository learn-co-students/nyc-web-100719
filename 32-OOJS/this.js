console.log("this")

// function sayName() {

//     console.log(`Hi my name is ${this.first}`)
// }

// let newVar = () => { console.log("IIFE"); return 1 }

// let Ken = {
//     first: "Ken",
//     last: "Averbookh",
//     sayName: sayName
// }

// let Jallen = {
//     first: "Jallen",
//     last: "Messersmith",
//     sayName: sayName,
// }


// let obj = {
//     instanceMethod: function () { console.log(this) }
// }

// obj.instanceMethod() // object vs window => object
// let globalFunc = obj.instanceMethod
// globalFunc() // object vs window => window

let snickersObj = {
    name: "snickers",
    sugarLevel: 600
}
let candyCornObj = {
    name: "candy corn",
    sugarLevel: 800
}

class Candy {
    constructor(candyObj) {
        this.name = candyObj.name
        this.sugarLevel = candyObj.sugarLevel
        // this.saySugarLevel = this.saySugarLevel.bind(this)
        Candy.all.push(this)
        this.id = Candy.id
        Candy.id++
    }

    saySugarLevel = () => {
        console.log(`this is my sugar level: ${this.sugarLevel}`)
    }

    static classMethod() {
        console.log("this is a class method")
    }

    // static all = []
}
Candy.all = []
Candy.id = 1


let candyCorn = new Candy(candyCornObj)
let snickers = new Candy(snickersObj)









