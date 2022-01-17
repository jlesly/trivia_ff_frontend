class User {
    constructor(user) {
        this.id = user.id
        this.username = user.username
        this.score = user.score
        User.all.push(this)
    }

}

User.all = []