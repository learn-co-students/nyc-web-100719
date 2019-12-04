class Adapter {
    // constructor(url) {
    //     this.url = "http://localhost:3000/api/v1/"
    // }
    static get(url) {
        return fetch(url)
            .then(resp => resp.json())
    }

    static persistLikes(candy) {
        fetch(`http://localhost:3000/api/v1/candies/${candy.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
        })

    }

    static persistCandy(candy) {
        return fetch("http://localhost:3000/api/v1/candies", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({ candy })

        })
            .then(function (resp) { return resp.json() })
    }

    static deleteCandy(id) {
        fetch(`http://localhost:3000/api/v1/candies/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
        })
        //     .then(function(){ removeCandy(e)})
    }

}