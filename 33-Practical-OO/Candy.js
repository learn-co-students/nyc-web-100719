class Candy {
    constructor(candyObj) {
        this.name = candyObj.name
        this.id = candyObj.id
        this.likes = candyObj.likes
        this.image = candyObj.image
        this.node
        this.upButton
        Candy.all.push(this)
        // this.addCandy = this.addCandy.bind(this)
    }

    static sort() {
        return Candy.all.sort((candy1, candy2) => candy1.id - candy2.id)
    }

    createCandy() {
        let li = document.createElement("li")
        li.className = "candy-item"
        li.innerHTML = `
    <h3>${this.name}</h3>
    <h4>Score: <span>${this.likes}</span> </h4>
    <img alt="" src=${this.image} />
    <button class="upVote" data-purpose="increase" data-somethingElse="new key" data-id=${this.id} data-likes=${this.likes}>Up Vote</button>
    <button>Down Vote</button>
    <button data-purpose="delete" data-id=${this.id}>X</button>
    `
        let upButton = li.querySelector("button")
        let downButton = li.querySelectorAll("button")[1]
        let deleteButton = li.querySelectorAll("button")[2]
        this.node = li
        EventListener.changeScore(upButton, this)
        EventListener.changeScore(downButton, this)
        EventListener.delete(deleteButton, this)
        return li
    }

    appendCandy = (div) => {
        div.append(this.createCandy())

    }

    // addVoting(){
    //     EventListener.changeScore()
    // }
}
Candy.all = []