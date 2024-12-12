// Import React and axios
import React, { useState } from "react";
import axios from "axios";

// Configuration form component
function ConfigurationForm() {
  // Initialize config state
  const [config, setConfig] = useState({
    totalTickets: 1000,
    ticketReleaseRate: 2000,
    customerRetrievalRate: 1000,
    maxTicketCapacity: 100,
  });

  // Handle input changes
  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: Number(e.target.value) });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/system/config", config)
      .then((response) => {
        alert("Configuration updated.");
      })
      .catch((error) => {
        console.error("Error updating configuration:", error);
      });
  };

  // Render form
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
      <button type="submit">Update</button>
    </form>
  );
}

// Export component
export default ConfigurationForm;