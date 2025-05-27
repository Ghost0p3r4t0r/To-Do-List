let tasks = [];
let taskIdCounter = 1;

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText === '') return;

    const task = {
        id: taskIdCounter++,
        text: taskText,
        completed: false,
        createdAt: new Date().toLocaleDateString()
    };

    tasks.push(task);
    input.value = '';
    renderTasks();
    updateStats();
}

function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        updateStats();
    }
}

function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(t => t.id !== taskId);
        renderTasks();
        updateStats();
    }
}

function renderTasks() {
    const tasksGrid = document.getElementById('tasksGrid');
    const emptyState = document.getElementById('emptyState');

    if (tasks.length === 0) {
        tasksGrid.innerHTML = '<div class="empty-state"><h3>No tasks yet!</h3><p>Add your first task above to get started.</p></div>';
        return;
    }

    tasksGrid.innerHTML = tasks.map(task => `
        <div class="task-card ${task.completed ? 'completed' : ''}">
            <div class="task-header">
                <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="toggleTask(${task.id})"></div>
                <div class="task-text">${task.text}</div>
            </div>
            <div class="task-meta">Created: ${task.createdAt}</div>
            <div class="task-actions">
                <button class="task-btn delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('completedTasks').textContent = completed;
    document.getElementById('pendingTasks').textContent = pending;
}

// Allow adding tasks with Enter key
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('taskInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // Initialize the app
    updateStats();
});