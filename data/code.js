const form = document.getElementById('form');
const taskInput = document.getElementById('task');
const list = document.getElementById('list');
let taskList = JSON.parse(localStorage.getItem('taskList')) !== null ? JSON.parse(localStorage.getItem('taskList')) : [];
// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log(JSON.parse(localStorage.getItem('taskList')))
  const tasks = JSON.parse(localStorage.getItem('taskList')) || [];
  renderList(taskList);
  console.log(tasks);
});



form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (taskInput.value.trim()) {
  
    // saveTasksToLocalStorage();
    console.log(taskList)
    console.log(taskInput.value)
    taskList.push(taskInput.value);
    localStorage.setItem('taskList', JSON.stringify(taskList))
    console.log(taskList)
    taskInput.value = '';
    location.reload()
  }

});

// function addTask(task) {
//   const li = document.createElement('li');
//   li.innerHTML = `
//     <span>${task}</span>
//     <button id='${task}' class="delete">Delete</button>
//   `;
//   list.appendChild(li);
// }
function renderList(taskList){
  taskList.forEach((item, index) => {
    const li = document.createElement('li');
      li.innerHTML = `
        <span>${item}</span>
        <button id='${index}' class="delete">Delete</button>
      `;
      list.appendChild(li);
  })
}

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    console.log(e.target.id)
    // e.target.parentElement.remove();
    taskList.splice(e.target.id, 1)
    console.log(taskList)
    localStorage.setItem('taskList', JSON.stringify(taskList));
location.reload()
    // saveTasksToLocalStorage();
    // taskList.splice()
    // location.reload()
    // AnimationEffect(TransitionEvent)
  }
  // console.log(tasks);

});

// function saveTasksToLocalStorage() {
//     const tasks = Array.from(list.children).map(li => li.firstChild.textContent.trim());
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
  

