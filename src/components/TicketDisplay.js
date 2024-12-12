// src/components/TicketDisplay.js
// Ticket display component
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

function TicketDisplay() {
  // Initialize ticket count state
  const [count, setCount] = useState(0);

  // Establish socket connection and listen for updates
  useEffect(() => {
    const socket = io("http://localhost:3000");

    // Update ticket count on receiving 'update' event
    socket.on("update", (data) => {
      setCount(data.ticketCount);
    });

    // Disconnect socket on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Tickets</h2>
      <p>Tickets Available : {count}</p>
    </div>
  );
}

export default TicketDisplay;
