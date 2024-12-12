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
  const customerList = () => {
		axios
			.get("http://localhost:3000/customer/all")
			.then((response) => {
				setCustomers(response.data);
			})
			.catch((error) => {
				console.error("Error fetching customers: ", error);
			});
	};

	useEffect(() => {
		customerList();
	}, []);

    const handleCustomerAdd = (customer) => {
			setCustomers([...customers, customer]);
		};

		const handleCustomerRemove = (customerId) => {
			  setCustomers((prev) => prev.filter((c) => c.id !== customerId));
		
		};
	return (
		<div>
			<h1>Ticket Tracking System</h1>
			<ConfigurationForm />
			<ControlPanel systemStatus={systemStatus} setSystemStatus={setSystemStatus} />
			<CustomerForm onCustomerAdded={handleCustomerAdd} />
			<CustomerList customers={customers} onCustomerRemoved={handleCustomerRemove} />
			<TicketDisplay />
		</div>
	);
}

export default App;
