import fixMouseScroll from "./fixMouseScroll.js";
import initCanvas from "./init-canvas.js";
import initTopBtn from "./init-top-btn.js";

export function initPage() {
	initCanvas()
	initTopBtn()
	fixMouseScroll()
}
