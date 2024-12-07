import React, { useState } from "react";
import axios from "axios";

function ConfigurationForm() {
	const [config, setConfig] = useState({
		totalTickets: 1000,
		ticketReleaseRate: 2000,
		customerRetrievalRate: 1000,
		maxTicketCapacity: 100,
	});

	const handleChange = (e) => {
		setConfig({ ...config, [e.target.name]: Number(e.target.value) });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3000/config", config)
			.then((response) => {
				alert("Configuration updated.");
			})
			.catch((error) => {
				console.error("Error updating configuration:", error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Configuration</h2>
			<label>
				Total Tickets:
				<input type="number" name="totalTickets" value={config.totalTickets} onChange={handleChange} />
			</label>
			<label>
				Ticket Release Rate (ms):
				<input type="number" name="ticketReleaseRate" value={config.ticketReleaseRate} onChange={handleChange} />
			</label>
			<label>
				Customer Retrieval Rate (ms):
				<input type="number" name="customerRetrievalRate" value={config.customerRetrievalRate} onChange={handleChange} />
			</label>
			<label>
				Max Ticket Capacity:
				<input type="number" name="maxTicketCapacity" value={config.maxTicketCapacity} onChange={handleChange} />
			</label>
			<button type="submit">Update Configuration</button>
		</form>
	);
}

export default ConfigurationForm;
