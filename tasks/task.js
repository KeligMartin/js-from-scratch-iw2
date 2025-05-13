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

export { Task };