function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li span').forEach(task => {
        tasks.push(task.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Load saved tasks when page loads
window.onload = loadTasks;