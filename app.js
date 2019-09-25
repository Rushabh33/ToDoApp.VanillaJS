const formNewTask = document.querySelector('form.add')
const formSearch = document.querySelector('form.search')
const list = document.querySelector('.toDos')


formSearch.addEventListener('keyup', searchTasks)
formNewTask.addEventListener('submit', addTodo)
list.addEventListener('click', removeToDo)

function searchTasks(e) {
  const userQuery = formSearch.elements['search'].value.trim()
  console.log('register')
  Array.from(list.children)
    .forEach(task => {
      if (!task.firstElementChild.textContent.includes(userQuery)) {
        task.classList.add('hidden')
        return true
      }
      console.log(task.classList)
      task.classList.remove('hidden')
    })

  // .forEach(item => {
  //   console.log(item.firstElementChild.textContent);
  // })

}

function addTodo(e) {
  e.preventDefault()
  addBaseHTMLToList()
  let newestTask = list.lastChild.firstElementChild
  newestTask.textContent = newTaskDescription(e)
}

function addBaseHTMLToList() {
  const newTaskHtml = `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span></span>
  <i class="far fa-trash-alt delete"></i>
</li>`
  list.innerHTML += newTaskHtml
}

function newTaskDescription(e) {
  const newTaskDescription = e.target.elements['add'].value.trim()
  e.target.elements['add'].value = ''
  return newTaskDescription
}

function removeToDo(e) {
  const target = e.target
  if (target.classList.contains('delete')) {
    target.parentElement.remove();
  }
}
