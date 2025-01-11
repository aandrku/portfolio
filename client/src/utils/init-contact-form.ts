import { notification } from "../components/notification.js"
import { animateClick } from "./animateClick.js"

interface ContactMessage {
	name: string
	email: string
	message: string
}

const form = document.querySelector("#contact-form") as HTMLElement
const nameInput = form.querySelector("#name") as HTMLInputElement
const emailInput = form.querySelector("#email") as HTMLInputElement
const messageInput = form.querySelector("#message") as HTMLInputElement
const btn = form.querySelector("#contact-btn") as HTMLElement

const getContactMessage = (): ContactMessage => {
	const msg: ContactMessage = {
		name: nameInput.value,
		email: emailInput.value,
		message: messageInput.value
	}

	return msg
}


const btnAction = () => {
	btn.onclick = () => {
		let body = JSON.stringify(getContactMessage())
		let statusOK : boolean = false

		fetch("/email", {
			method: "POST",
			body: body
		})
		.then(resp => {
			if (resp.ok) {
				statusOK = true
			}
			return resp.text()
		})
		.then(text => {
			if (statusOK) {
				notification("Your message was successfully sent!")
			} else {
				notification(text)
			}
		})
	}
}

export const initForm = () => {
	animateClick(btn, "contact__btn--clicked")
	btnAction()
}


