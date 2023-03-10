import Tool from "./Tool";

export default class Brush extends Tool {
	name = "brush";
	constructor(canvas) {
		super(canvas);
		this.listen();
	}

	listen() {
		this.canvas.onmousedown = this.mouseDownHandler.bind(this);
		this.canvas.onmouseup = this.mouseUpHandler.bind(this);
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
	}

	mouseDownHandler(e) {
		this.mouseDown = true;
		this.ctx.beginPath();
		this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
	}

	mouseUpHandler(e) {
		this.mouseDown = false;
	}

	mouseMoveHandler(e) {
		if (this.mouseDown) {
			this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
		}
	}

	draw(x, y) {
		this.ctx.lineTo(x, y);
		this.ctx.stroke();
		console.log("draw brush");
	}
}
