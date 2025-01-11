export function animateClick(el: HTMLElement, className: string) {
	el.addEventListener("touchstart", () => {
		el.classList.add(className);
	});

	el.addEventListener("touchend", () => {
		el.classList.remove(className);
	});

	// Mouse events for desktop devices
	el.addEventListener("mousedown", () => {
		el.classList.add(className);
	});

	el.addEventListener("mouseup", () => {
		el.classList.remove(className);
	});

	// Optional: Remove the active class if the user moves their finger or mouse away from the button
	el.addEventListener("touchcancel", () => {
		el.classList.remove(className);
	});

	el.addEventListener("mouseleave", () => {
		el.classList.remove(className);
	});
}
