import { Task } from './tasks/task.js';

const table = document.getElementById('content')
const task1 = new Task('Task 1', 'créer le site web', 0)
const task2 = new Task('Task 2', 'importer bootstrap', 10)
const task3 = new Task('Task 3', 'créer le script', 1)
const task4 = new Task('Task 4', 'créer les tasks', 2)
const task5 = new Task('Task 5', 'ajouter les tasks au tableau', 3)

const tasks = [task1, task2, task3, task4, task5]

const priority = document.getElementById('priority')

tasks.forEach((task) => {
	createTaskNode(task)
})

const tablesRows = document.getElementsByClassName('taskRow')
priority.addEventListener('click', () => {
	while (tablesRows.length > 0) {
		tablesRows[0].parentNode.removeChild(tablesRows[0])
	}
	const sortedTasks = tasks.sort((a, b) => a.priority - b.priority)
	sortedTasks.forEach((task) => {
		createTaskNode(task)
	})
})

const addTask = document.getElementById('add-task')

addTask.addEventListener('click', () => {
	const task = new Task('Nouvelle Task', 'nouvelle description', 10)
	tasks.push(task)
	createTaskNode(task)
})


function createTaskNode(task) {
	const taskElement = document.createElement('tr')
	// <tr></tr>
	taskElement.classList.add('taskRow')
	initCellTable(taskElement, task.title)
	initCellTable(taskElement, task.description)
	initCellTable(taskElement, task.priority)
	// <tr><td>titre</td><td>desc
	table.appendChild(taskElement)
}

function initCellTable(taskElement, taskValue) {
	const taskCell = document.createElement('td')
	taskCell.innerText = taskValue
	taskElement.appendChild(taskCell)
}

const alert = () => {
	if (tablesRows.length >= 5) {
		window.alert('trop de lignes !')
	}
}
alert()