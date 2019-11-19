console.log("starting")
let candies = [
    {
        id: 4,
        name: "Blow Pop",
        image: "https://pics.drugstore.com/prodimg/436336/450.jpg"
    },
    {
        id: 5,
        name: "Twix",
        image: "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/317942"
    },
    {
        id: 6,
        name: "Jaw Breakers",
        image: "https://s1.dmcdn.net/v/DxDxS1MrKZ0Dr9zbi/x1080"
    },
]

const parentUl = document.getElementsByTagName("ul")[0]


candies.forEach(function (candy) {
    let li = document.createElement("li")
    li.className = "candy-item"
    li.innerHTML = `
        <h3>${candy.name}</h3>
                <h4>Score: <span>0</span> </h4>
                <img alt="" src=${candy.image} />
                <button class="upVote">Up Vote</button>
                <button>Down Vote</button>
    `
    parentUl.append(li)
})


let buttons = document.getElementsByClassName("upVote")

let array = Array.from(buttons)

function increaseScore(e) {
    let parentLi = e.target.parentNode
    let span = parentLi.querySelector("span")
    let score = parseInt(span.innerText) + 1
    span.innerText = score
}

array.forEach(function (button) {
    button.addEventListener("click", increaseScore)


})












