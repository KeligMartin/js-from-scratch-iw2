class Task {
	constructor(title, description, priority) {
		this.title = title
		this.description = description
		this.priority = priority
	}
}

const task1 = new Task("Tache 1", "description 1", 1)
const task2 = new Task("Tache 2", "description 2", 10)
const task3 = new Task("Tache 3", "description 3", 7)
const task4 = new Task("Tache 4", "description 4", 57)
const task5 = new Task("Tache 5", "description 5", 0)

const tasks = [task1, task2, task3, task4, task5]

const tasksUrgentes = tasks.filter((element) => element.priority < 5)

// filter natif
const tasksUrgentesNatives = []
for(let i = 0; i < tasks.length; i++) {
	const element = tasks[i]
	if(element.priority < 5) {
		tasksUrgentesNatives.push(element)
	}
}

function doublePriority(priority) {
	return priority * 2
}

const tasksDoublees = tasks.map((element) => doublePriority(element.priority))
// natif
const tasksDoubleesNatif = []
for(let i = 0; i < tasks.length; i++) {
	const element = tasks[i]
	element.priority = element.priority * 2
	tasksDoubleesNatif.push(element)
}

console.table(tasks.sort((a, b) => a.priority - b.priority))
console.table(tasksUrgentes)
console.table(tasksUrgentesNatives)
console.table(tasksDoubleesNatif)

// fuction sort()