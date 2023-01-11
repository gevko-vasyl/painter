import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import "../styles/canvas.scss";

const Canvas = () => {
	const canvasRef = useRef();

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current);
		toolState.setTool(new Brush(canvasRef.current));
	}, []);

	const mouseDownHandler = () => {
		canvasState.pushToUndo(canvasRef.current.toDataURL());
	};

	return (
		<div className="canvas">
			<canvas ref={canvasRef} width={1000} height={600} onMouseDown={mouseDownHandler}></canvas>
		</div>
	);
};

export default observer(Canvas);
