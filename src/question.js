class Question {
    constructor(question, questionAttributes) {
        this.id = questionAttributes.id
        this.prompt = questionAttributes.prompt
        this.option = questionAttributes.option
        this.answer = questionAttributes.answer
        this.category_id = questionAttributes.category_id
        Question.all.push(this)
    }
    static renderQuestions(e) {
        let score = document.getElementById("scoreContainer");
        score.innerHTMl = currentScore;
        let resultContainer = document.getElementById("results")
        let categoryQuestions = document.getElementById("category-questions")
        categoryQuestions.innerHTML = ""
        let filter = Question.all.filter(function(question) {
            return question.category_id == parseInt(e.target.id)
        })

        filter.forEach(question => {

            let ul = document.createElement("ul")
            let li = document.createElement("li")
            li.setAttribute("id", `${question.id}`);
            li.innerHTML = `${question.prompt}`

            categoryQuestions.appendChild(ul)
            ul.appendChild(li)

            let button1 = document.createElement("BUTTON")
            button1.innerHTML = `${question.option}`
            li.appendChild(button1)
            button1.addEventListener('click', function(e) {
                e.preventDefault()
                resultContainer.innerHTML = "Wrong Answer"
                ul.remove("id")
            })

            let button2 = document.createElement("BUTTON")
            button2.innerHTML = `${question.answer}`
            li.appendChild(button2)
            button2.addEventListener('click', function(e) {
                e.preventDefault()
                resultContainer.innerHTML = "Correct!"
                score.innerHTML++;
                currentScore++
                ul.remove("id")
            })
        })
    }

}
Question.all = [];