// src/components/TicketDisplay.js
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

function TicketDisplay() {
	const [ticketCount, setTicketCount] = useState(0);
	console.log(ticketCount)
	useEffect(() => {
		const socket = io("http://localhost:3000");

		socket.on("update", (data) => {
			setTicketCount(data.ticketCount);
		});

		return () => {
			socket.disconnect();
		};
	}, []);

	return (
		<div>
			<h2>Ticket Availability</h2>
			<p>Available Tickets: {ticketCount}</p>
		</div>
	);
}

export default TicketDisplay;
