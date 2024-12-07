import React from "react";
import axios from "axios";

function CustomerList({ customers, onCustomerRemoved }) {
	const handleDelete = async (customerId) => {
		try {
			await axios.delete(`http://localhost:3000/customers/${customerId}`);
			onCustomerRemoved(customerId);
		} catch (error) {
			console.error("Error deleting customer:", error);
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
