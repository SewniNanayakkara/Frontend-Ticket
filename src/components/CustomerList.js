// Customer list component
import React from "react";
import axios from "axios";

function CustomerList({ customers, onCustomerRemoved }) {
	// Handle customer deletion
	const handleDelete = async (customerId) => {
		try {
			// Delete customer from server
			await axios.delete(`http://localhost:3000/customer/${customerId}`);
			// Notify parent component of deleted customer
			onCustomerRemoved(customerId);
		} catch (error) {
			console.error("Customer Delete error:", error);
		}
	};

	return (
		<div>
			<h3>Customers</h3>
			<ul>
				{customers.map((customer) => (
					<li key={customer.id}>
						Customer ID: {customer.id} - Priority: {customer.priority}
						<button onClick={() => handleDelete(customer.id)}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CustomerList;
