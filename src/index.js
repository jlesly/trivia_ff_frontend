const categories_endPoint = "http://localhost:3000/api/v1/categories"
const users_endPoint = "http://localhost:3000/api/v1/users"
const questions_endPoint = "http://localhost:3000/api/v1/questions"

document.addEventListener('DOMContentLoaded', () => {
    getCategories(), getUsers(), getQuestions()

    const createNewUserForm = document.getElementById("new-user")

    createNewUserForm.addEventListener("submit", createFormHandler)
})

function getUsers() {
    fetch(users_endPoint)
        .then(response => response.json())
        .then(json => {
            for (let user of json.data) {
                let userData = Object.assign({}, { id: user.id }, user.attributes)
                let newUser = new user(userData)
                newUser.renderUser()
            }
        })
}

function createFormHandler(e) {
    e.preventDefault()
    let newUser = document.querySelector("#create-user").value
    let score = document.querySelector("#score").value
    postFetch(newUser)
}

function getCategories() {
    fetch(categories_endPoint)
        .then(response => response.json())
        .then(json => {
            for (let category of json.data) {

                let newCategory = new Category(category, category.attributes)
            }
            Category.renderCategory();
        })
}