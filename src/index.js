const categories_endPoint = "http://localhost:3000/api/v1/categories"
const users_endPoint = "http://localhost:3000/api/v1/users"
const questions_endPoint = "http://localhost:3000/api/v1/questions"

document.addEventListener('DOMContentLoaded', () => {
    getCategories()
})

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