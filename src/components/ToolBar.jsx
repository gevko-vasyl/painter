import { useState } from "react";
import { observer } from "mobx-react-lite";
import { IoMdBrush, IoIosUndo, IoIosRedo } from "react-icons/io";
import { BiRectangle } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
import { FaEraser } from "react-icons/fa";
import { TbLine } from "react-icons/tb";
import { AiOutlineClear } from "react-icons/ai";
import { MdOutlineSaveAlt } from "react-icons/md";
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import Rectangle from "../tools/Rectangle";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
import "../styles/toolbar.scss";

const Toolbar = () => {
	const [prevColor, setPrevColor] = useState("");

	const download = () => {
		const dataUrl = canvasState.canvas.toDataURL();
		const a = document.createElement("a");
		a.href = dataUrl;
		a.download = "My draw.jpg";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	return (
		<div className="toolbar">
			<IoMdBrush
				title="Brush"
				className={`toolbar__btn ${toolState?.tool?.name === "brush" && "active"}`}
				onClick={() => {
					const isEraser = toolState.tool.name === "eraser";
					toolState.setTool(new Brush(canvasState.canvas));
					if (isEraser) {
						toolState.tool.ctx.strokeStyle = prevColor;
					}
				}}
			/>
			<BiRectangle
				title="Rectangle"
				className={`toolbar__btn ${toolState?.tool?.name === "rectangle" && "active"}`}
				onClick={() => {
					const isEraser = toolState.tool.name === "eraser";
					toolState.setTool(new Rectangle(canvasState.canvas));
					if (isEraser) {
						toolState.tool.ctx.strokeStyle = prevColor;
					}
				}}
			/>
			<BsCircle
				title="Circle"
				className={`toolbar__btn ${toolState?.tool?.name === "circle" && "active"}`}
				onClick={() => {
					const isEraser = toolState.tool.name === "eraser";
					toolState.setTool(new Circle(canvasState.canvas));
					if (isEraser) {
						toolState.tool.ctx.strokeStyle = prevColor;
					}
				}}
			/>
			<FaEraser
				title="Eraser"
				className={`toolbar__btn ${toolState?.tool?.name === "eraser" && "active"}`}
				onClick={() => {
					setPrevColor(toolState.tool.ctx.strokeStyle);
					toolState.setTool(new Eraser(canvasState.canvas));
				}}
			/>
			<TbLine
				title="Line"
				className={`toolbar__btn ${toolState?.tool?.name === "line" && "active"}`}
				onClick={() => {
					const isEraser = toolState.tool.name === "eraser";
					toolState.setTool(new Line(canvasState.canvas));
					if (isEraser) {
						toolState.tool.ctx.strokeStyle = prevColor;
					}
				}}
			/>

			<AiOutlineClear
				title="Clear"
				className={`toolbar__btn ${toolState?.tool?.name === "line" && "active"}`}
				onClick={() =>
					toolState.tool.ctx.clearRect(
						0,
						0,
						toolState.tool.canvas.width,
						toolState.tool.canvas.height
					)
				}
			/>
			<IoIosUndo
				title="Cancel last action"
				className="toolbar__btn ml-auto"
				onClick={() => canvasState.undo()}
			/>
			<IoIosRedo
				title="Return last action"
				className="toolbar__btn"
				onClick={() => canvasState.redo()}
			/>
			<MdOutlineSaveAlt title="Download" className="toolbar__btn" onClick={download} />
		</div>
	);
};

export default observer(Toolbar);
