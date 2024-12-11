// src/components/ControlPanel.js
import React from "react";
import axios from "axios";

function ControlPanel({ systemStatus, setSystemStatus }) {
	const startSystem = () => {
		axios
			.post("http://localhost:3000/system/start")
			.then(() => {
				setSystemStatus("running");
			})
			.catch((error) => {
				console.error("Starting system error:", error);
			});
	};

	const stopSystem = () => {
		axios
			.post("http://localhost:3000/system/stop")
			.then(() => {
				setSystemStatus("stopped");
			})
			.catch((error) => {
				console.error("Stopping system error:", error);
			});
	};

	return (
		<div>
			<h2>System Control</h2>
			<p>Status: {systemStatus}</p>
			<button onClick={startSystem} disabled={systemStatus === "running"}>
				Start
			</button>
			<button onClick={stopSystem} disabled={systemStatus === "stopped"}>
				Stop
			</button>
		</div>
	);
}

export default ControlPanel;
