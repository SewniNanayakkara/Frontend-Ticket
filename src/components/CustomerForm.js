// CustomerForm.js
// Customer form component
import React, { useState } from "react";
import axios from "axios";

function CustomerForm({ onCustomerAdded }) {
	// Initialize priority state
	const [priority, setPriority] = useState(0);

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Add customer to server
			const response = await axios.post("http://localhost:3000/customer/add", { priority });
			onCustomerAdded(response.data);
			setPriority(priority);
		} catch (error) {
			console.error("Customer Add Error:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Add Customer</h3>
			<div>
				<label>Priority :</label>
				<input type="number" value={priority} onChange={(e) => setPriority(Number(e.target.value))} required min="0" />
			</div>
			<button type="submit">Add New Customer</button>
		</form>
	);
}

export default CustomerForm;
