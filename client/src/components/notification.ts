export const notification = (message: string) => {
	const el = document.createElement("div")
	el.classList.add("notification")
	el.innerHTML = `
	${message}
	`

	document.body.append(el)

	setTimeout(() => {
		el.remove()
	}, 3000)
}
