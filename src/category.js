class Category {
    constructor(category, categoryAttributes) {
        this.id = category.id
        this.name = categoryAttributes.name
        Category.all.push(this)
    }

    static renderCategory() {
        let select = document.getElementById("category-container")
        select.innerHTML = "Select a Category"
        let ul = document.getElementById("ul2")
        Category.all.forEach(category => {
            let li2 = document.createElement("li2")
            li2.setAttribute("id", `${category.id}`);
            li2.innerHTML = `${category.name}`
            ul2.appendChild(li2)
            li2.addEventListener('click', function(e) {
                Question.renderQuestions(e);
                alert("GOOD LUCK!");
                li2.remove()
            })
        })
    }
}

Category.all = [];