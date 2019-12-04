class Adapter {
    // constructor(url) {
    //     this.url = "http://localhost:3000/api/v1/"
    // }
    static get(url) {
        return fetch(url)
            .then(resp => resp.json())
    }




}