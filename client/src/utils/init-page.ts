import fixMouseScroll from "./fixMouseScroll.js";
import initCanvas from "./init-canvas.js";
import { initForm } from "./init-contact-form.js";
import initTopBtn from "./init-top-btn.js";

export function initPage() {
	initCanvas()
	initTopBtn()
	initForm()
	fixMouseScroll()
}
