
let candies = []
function getCandies() {
    fetch("http://localhost:3000/api/v1/candies")
        .then(function (body) { return body.json() })
        .then(function (response) { /*take that array of candies and create new li's with each candy */
            response.data.forEach(betterAddCandy)
            // candies = candiesArray

        })
}


function betterAddCandy(candy) {
    addCandy(candy.attributes)
}

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

getCandies()



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


function addCandy(candy) {
    let li = document.createElement("li")
    li.className = "candy-item"
    li.innerHTML = `
    <h3>${candy.name}</h3>
    <h4>Score: <span>${candy.likes}</span> </h4>
    <img alt="" src=${candy.image} />
    <button class="upVote" data-purpose="increase" data-somethingElse="new key" data-id=${candy.id} data-likes=${candy.likes}>Up Vote</button>
    <button>Down Vote</button>
    <button data-purpose="delete" data-id=${candy.id}>X</button>
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
    e.target.dataset.likes = score
    span.innerText = score
}

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
