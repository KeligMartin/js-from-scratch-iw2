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

console.table(tasks.sort((a, b) => a.priority - b.priority))

// fuction sort()