import Brush from "./Brush";

export default class Eraser extends Brush {
	name = "eraser";

	draw(x, y) {
		this.prevStroke = this.ctx.strokeStyle;
		this.ctx.strokeStyle = "white";
		this.ctx.lineTo(x, y);
		this.ctx.stroke();
	}
}
