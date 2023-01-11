import SettingBar from "./components/SettingBar";
import ToolBar from "./components/ToolBar";
import Canvas from "./components/Canvas";
import "./styles/app.scss";

function App() {
	return (
		<div className="app">
			<ToolBar />
			<SettingBar />
			<Canvas />
		</div>
	);
}

export default App;
