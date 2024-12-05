const btn = document.getElementById("top-btn") as HTMLElement
const cnt = document.getElementById("content-wrapper") as HTMLElement

const initTopBtn = () => {
	btn.onclick = () => {
		cnt.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}
}

export default initTopBtn
