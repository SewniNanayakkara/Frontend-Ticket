// Import necessary dependencies
import React, { useState, useEffect } from "react";
import ConfigurationForm from "./components/ConfigurationForm";
import ControlPanel from "./components/ControlPanel";
import TicketDisplay from "./components/TicketDisplay";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import axios from "axios";

// Main App component
function App() {
  // State variables for system status and customers
  const [systemStatus, setSystemStatus] = useState("stopped");
  const [customers, setCustomers] = useState([]);

  // Function to fetch customer list from API
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

  // Fetch customer list on component mount
  useEffect(() => {
    customerList();
  }, []);

  // Handle customer addition
  const handleCustomerAdd = (customer) => {
    setCustomers([...customers, customer]);
  };

  // Handle customer removal
  const handleCustomerRemove = (customerId) => {
    setCustomers((prev) => prev.filter((c) => c.id !== customerId));
  };

  // Render App component
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

// Export App component
export default App;
