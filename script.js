document.getElementById('add-task-btn').addEventListener('click', addTask);

const maxTasks = 5;

function addTask() {
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    const maxLength = 15;

    if (taskText === '') return;

    if (taskText.length > maxLength) {
        alert(`任务文本不能超过 ${maxLength} 个字符`);
        return;
    }

    if (taskList.children.length >= maxTasks) {
        alert(`任务数量不能超过 ${maxTasks} 个`);
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span class="task-circle" onclick="toggleComplete(this)"></span>
        <span>${taskText}</span>
        <div>
            <button onclick="editTask(this)">编辑</button>
            <button onclick="deleteTask(this)">删除</button>
        </div>
    `;

    document.getElementById('task-list').appendChild(taskItem);
    taskInput.value = '';
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskCircle = taskItem.querySelector('.task-circle');
    
    // 判断任务是否已完成
    if (taskCircle.classList.contains('completed-circle')) {
        alert('任务已完成，不能再修改！');
        return;
    }
    
    const maxLength = 15;
    const taskText = taskItem.querySelector('span:nth-child(2)').innerText;
    const newTaskText = prompt('输入更改后的新任务', taskText);

    if (newTaskText.length > maxLength) {
        alert(`任务文本不能超过 ${maxLength} 个字符`);
        return;
    }
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.querySelector('span:nth-child(2)').innerText = newTaskText.trim();
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function toggleComplete(circle) {
    const taskItem = circle.parentElement;
    taskItem.classList.toggle('completed');
    circle.classList.toggle('completed-circle');
}