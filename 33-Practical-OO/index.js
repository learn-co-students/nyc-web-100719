const parentUl = document.getElementsByTagName("ul")[0]
Adapter.get("http://localhost:3000/api/v1/candies").then(function (response) {
    response.data.forEach((candyObj) => {
        new Candy(candyObj.attributes)
    })
}).then(() => Candy.sort().forEach((candy) => {
    candy.appendCandy(parentUl)
}))

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
                likes: 0,
                image: e.target.image.value
            }
            Adapter.persistCandy(candy).then(function (resp) {
                let newCandy = new Candy(resp.data.attributes)
                newCandy.appendCandy(parentUl)
            })
            form.remove()
            welcome.insertAdjacentElement("afterend", button)
        })
    }
})