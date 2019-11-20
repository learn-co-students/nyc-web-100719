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

let button = document.createElement("button")
button.dataset.purpose = "form"
button.innerText = "add candy"

let welcome = document.querySelector("p")
welcome.insertAdjacentElement("afterend", button)



document.body.addEventListener("click", function (e) {
    if (e.target.dataset.purpose === "form") {
        let form = document.createElement("form")
        form.innerHTML = `
<input type="text" placeholder="candy name" name="name"/>
    <input type="text" placeholder="candy image" name="image"/>
    <input type="submit" />
`
        button.remove()
        welcome.insertAdjacentElement("afterend", form)
        form.addEventListener("submit", function (e) {
            e.preventDefault()
            let candy = {
                name: e.target.name.value,
                image: e.target.image.value
            }
            addCandy(candy)
            form.remove()
            welcome.insertAdjacentElement("afterend", button)
        })
        // replaceChild(form, button)
    }
})


function addCandy(candy) {
    let li = document.createElement("li")
    li.className = "candy-item"
    li.innerHTML = `
    <h3>${candy.name}</h3>
    <h4>Score: <span>0</span> </h4>
    <img alt="" src=${candy.image} />
    <button class="upVote" data-purpose="increase" data-somethingElse="new key">Up Vote</button>
    <button>Down Vote</button>
    <button data-purpose="delete">X</button>
    `
    parentUl.append(li)
}
candies.forEach(addCandy)


function removeCandy(e) {
    let parentLi = e.target.parentNode
    parentLi.remove()

}

//function made to increase the score of a candy after an upVote button click
function changeScore(e) {
    let parentLi = e.target.parentNode
    let span = parentLi.querySelector("span")
    let score = e.target.dataset.purpose === "increase" ? parseInt(span.innerText) + 1 : parseInt(span.innerText) - 1
    span.innerText = score
}

parentUl.addEventListener("click", function (e) {
    if (e.target.dataset.purpose === "increase") {
        //defined on line 43
        changeScore(e)
    } else if (e.target.dataset.purpose === "delete") {
        console.log("deleting")
        removeCandy(e)
    }
})

{/* <form>
    <input type="text" placeholder="candy name"/>
    <input type="text" placeholder="candy image"/>
    <input type="submit" />

</form>
 */}










