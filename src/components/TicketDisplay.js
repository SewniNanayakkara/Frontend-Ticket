// src/components/TicketDisplay.js
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

function TicketDisplay() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		const socket = io("http://localhost:3000");

		socket.on("update", (data) => {
			setCount(data.ticketCount);
		});

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
