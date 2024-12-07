import React, { useState } from "react";
import ConfigurationForm from "./components/ConfigurationForm";
import ControlPanel from "./components/ControlPanel";
import TicketDisplay from "./components/TicketDisplay";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
function App() {
	const [systemStatus, setSystemStatus] = useState("stopped");
  const [customers, setCustomers] = useState([]);
    const handleCustomerAdded = (customer) => {
			setCustomers([...customers, customer]);
		};

		const handleCustomerRemoved = (customerId) => {
			setCustomers(customers.filter((customer) => customer.id !== customerId));
		};
	return (
		<div>
			<h1>Real-Time Event Ticketing System</h1>
			<ConfigurationForm />
			<ControlPanel systemStatus={systemStatus} setSystemStatus={setSystemStatus} />
			<CustomerForm onCustomerAdded={handleCustomerAdded} />
			<CustomerList customers={customers} onCustomerRemoved={handleCustomerRemoved} />
			<TicketDisplay />
		</div>
	);
}

export default App;
