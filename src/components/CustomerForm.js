// CustomerForm.js
import React, { useState } from "react";
import axios from "axios";

function CustomerForm({ onCustomerAdded }) {
	const [priority, setPriority] = useState(0);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:3000/customers", { priority });
			onCustomerAdded(response.data);
			setPriority(0);
		} catch (error) {
			console.error("Error adding customer:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Add Customer</h3>
			<div>
				<label>Priority Level:</label>
				<input type="number" value={priority} onChange={(e) => setPriority(Number(e.target.value))} required min="0" />
			</div>
			<button type="submit">Add Customer</button>
		</form>
	);
}

export default CustomerForm;
