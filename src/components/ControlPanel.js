// src/components/ControlPanel.js
import React from "react";
import axios from "axios";

function ControlPanel({ systemStatus, setSystemStatus }) {
	const startSystem = () => {
		axios
			.post("http://localhost:3000/start")
			.then(() => {
				setSystemStatus("running");
			})
			.catch((error) => {
				console.error("Error starting system:", error);
			});
	};

	const stopSystem = () => {
		axios
			.post("http://localhost:3000/stop")
			.then(() => {
				setSystemStatus("stopped");
			})
			.catch((error) => {
				console.error("Error stopping system:", error);
			});
	};

	return (
		<div>
			<h2>Control Panel</h2>
			<p>System Status: {systemStatus}</p>
			<button onClick={startSystem} disabled={systemStatus === "running"}>
				Start System
			</button>
			<button onClick={stopSystem} disabled={systemStatus === "stopped"}>
				Stop System
			</button>
		</div>
	);
}

export default ControlPanel;
