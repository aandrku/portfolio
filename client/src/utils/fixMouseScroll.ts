const cnt = document.getElementById("content-wrapper") as HTMLElement
const scrollDelay = 150
let lastWheelEvent = Date.now() - 500;

const fixMouseScroll = () => {
	if (isChrome()) {
		console.log("scroll behaviout modified")
		cnt.addEventListener('wheel', function (event) {
			event.preventDefault();


			const now = Date.now()

			if (now - lastWheelEvent > scrollDelay) {
				console.log("scroll")
				if (event.deltaY > 0) {
					console.log("scrollby called")
					cnt.scrollTop = cnt.scrollTop + window.innerHeight
				} else {
					console.log("scrollby called")
					cnt.scrollTop = cnt.scrollTop - window.innerHeight
				}
			}
			lastWheelEvent = now
		});

	}
}

const isChrome = (): boolean => {
	return navigator.userAgent.toLowerCase().includes("chrome");

}

export default fixMouseScroll
