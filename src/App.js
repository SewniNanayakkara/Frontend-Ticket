import React, { useState, useEffect } from "react";
import ConfigurationForm from "./components/ConfigurationForm";
import ControlPanel from "./components/ControlPanel";
import TicketDisplay from "./components/TicketDisplay";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import axios from "axios";
function App() {
	const [systemStatus, setSystemStatus] = useState("stopped");
  const [customers, setCustomers] = useState([]);
    useEffect(() => {
			axios
				.get("http://localhost:3000/customer/all")
				.then((response) => {
					setCustomers(response.data);
				})
				.catch((error) => {
					console.error("Error fetching customers:", error);
				});
		}, []);

    const handleCustomerAdd = (customer) => {
			setCustomers([...customers, customer]);
		};

		const handleCustomerRemove = (customerId) => {
			setCustomers(customers.filter((customer) => customer.id !== customerId));
		};
	return (
		<div>
			<h1>Ticket Tracking System</h1>
			<ConfigurationForm />
			<ControlPanel systemStatus={systemStatus} setSystemStatus={setSystemStatus} />
			<CustomerForm onCustomerAdd={handleCustomerAdd} />
			<CustomerList customers={customers} onCustomerRemove={handleCustomerRemove} />
			<TicketDisplay />
		</div>
	);
}

export default App;
