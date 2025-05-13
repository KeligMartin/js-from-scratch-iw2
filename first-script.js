class Task {
	#author

	constructor(title, description, priority, author) {
		this.title = title
		this.description = description
		this.priority = priority
		this.#author = author
	}

	get author() {
		return this.author
	}
}

const task1 = new Task("Tache 1", "description 1", 1, "Kelig")
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

const totalPriority = tasks.reduce((acc, currentValue) => acc + currentValue.priority, 0)

// natif
let total = 0
for(let i = 0; i < tasksDoublees.length; i++) {
	total = total + tasksDoublees[i]
}

console.table(tasks.sort((a, b) => a.priority - b.priority))
console.table(tasksUrgentes)
console.table(tasksUrgentesNatives)
console.table(tasksDoubleesNatif)
console.log(totalPriority)

// fuction sort()