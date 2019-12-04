class EventListener {

    static changeScore(button, candyObj) {
        button.addEventListener("click", function changeScore(e) {
            console.log("clicked")
            let parentLi = e.target.parentNode
            let span = parentLi.querySelector("span")
            let score = e.target.dataset.purpose === "increase" ? parseInt(span.innerText) + 1 : parseInt(span.innerText) - 1
            e.target.dataset.likes = score
            span.innerText = score
            Adapter.persistLikes(candyObj)
        })
    }

    static delete(button, candyObj) {
        button.addEventListener("click", function removeCandy(e) {
            let parentLi = e.target.parentNode
            parentLi.remove()
            Adapter.deleteCandy(candyObj.id)

        })
    }




}