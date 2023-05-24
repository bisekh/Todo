const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        }) 

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        }) 

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}
function time(){
    let _time = new Date();
    let hour = _time.getHours()-12;
    let minute = _time.getMinutes();
    let second = _time.getSeconds();
    let total_time = hour + ": " + minute + ": " + second
    document.getElementById("clock").append(" "+ total_time)
}

time()