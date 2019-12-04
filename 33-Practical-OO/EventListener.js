class EventListener {

    static changeScore(node) {
        node.addEventListener("click", function changeScore(e) {
            let parentLi = e.target.parentNode
            let span = parentLi.querySelector("span")
            let score = e.target.dataset.purpose === "increase" ? parseInt(span.innerText) + 1 : parseInt(span.innerText) - 1
            e.target.dataset.likes = score
            span.innerText = score
        })
    }

    static delete(node) {
        node.addEventListener("click", function removeCandy(e) {
            let parentLi = e.target.parentNode
            parentLi.remove()

        })
    }




}