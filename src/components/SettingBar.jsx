import toolState from "../store/toolState";

const SettingBar = () => {
	return (
		<div className="setting-bar">
			<label htmlFor="line-width">Line width:</label>
			<input
				style={{ margin: "0 10px" }}
				id="line-width"
				type="number"
				defaultValue={10}
				min={1}
				max={50}
				onChange={e => toolState.setLineWidth(e.target.value)}
			/>
			<label htmlFor="stroke-width">Stroke color:</label>
			<input
				style={{ margin: "0 10px" }}
				id="stroke-width"
				type="color"
				onChange={e => toolState.setStrokeColor(e.target.value)}
			/>
			<label htmlFor="stroke-width">Fill color:</label>
			<input
				style={{ margin: "0 10px" }}
				id="fill-width"
				type="color"
				onChange={e => toolState.setFillColor(e.target.value)}
			/>
		</div>
	);
};

export default SettingBar;
