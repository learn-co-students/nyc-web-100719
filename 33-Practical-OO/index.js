
/* 
    Create Classes for code/behavior that we need to be modular and reusable

Candy Class
    Fetch
    Event Listeners
*/

Adapter.get("http://localhost:3000/api/v1/candies").then(function (response) {
    response.data.forEach((candyObj) => {
        let newCandy = new Candy(candyObj.attributes)
        newCandy.appendCandy(parentUl)

    })
})








function persistLikes(id, likes) {
    fetch(`http://localhost:3000/api/v1/candies/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
    })
    // .then(function (resp) { return resp.json() })
    // .then(console.log)
}




const parentUl = document.getElementsByTagName("ul")[0]

let button = document.createElement("button")
button.dataset.purpose = "form"
button.innerText = "add candy"

let welcome = document.querySelector("p")
welcome.insertAdjacentElement("afterend", button)




function persistCandy(candy) {
    fetch("http://localhost:3000/api/v1/candies", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify({ candy })

    })
        .then(function (resp) { return resp.json() })
        .then(function (candy) { addCandy(candy.attribute) })
}

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
            persistCandy(candy)
            form.remove()
            welcome.insertAdjacentElement("afterend", button)
        })
        // replaceChild(form, button)
    }
})



function deleteCandy(id, e) {
    fetch(`http://localhost:3000/api/v1/candies/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "accepts": "application/json"
        },
    })
    //     .then(function(){ removeCandy(e)})
}

parentUl.addEventListener("click", function (e) {
    if (e.target.dataset.purpose === "increase") {
        //defined on line 43
        changeScore(e)
        persistLikes(e.target.dataset.id, e.target.dataset.likes)

    } else if (e.target.dataset.purpose === "delete") {
        console.log("deleting")
        removeCandy(e)
        deleteCandy(e.target.dataset.id)
    }
})
