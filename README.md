<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <header>
        <h1>Frontend GUI</h1>
    </header>
    <div class="container">
        <!-- Ticket Pool Status -->
        <div class="section">
            <h2>Ticket Pool Status</h2>
            <div class="ticket-status">
                Tickets Available: 100
            </div>
        </div>
        <!-- Control Panel -->
        <div class="section control-panel">
            <h2>Control Panel</h2>
            <button onclick="startSystem()">Start</button>
            <button onclick="stopSystem()">Stop</button>
            <button onclick="resetSystem()">Reset</button>
        </div>
        <!-- Configuration Settings -->
        <div class="section">
            <h2>Configuration Settings</h2>
            <form class="config-form" onsubmit="return submitConfig(event)">
                <label for="param1">Parameter 1:</label>
                <input type="text" id="param1" name="param1" placeholder="Enter value">
                <label for="param2">Parameter 2:</label>
                <input type="text" id="param2" name="param2" placeholder="Enter value">
                <button type="submit">Submit</button>
            </form>
        </div>
        <!-- Error Display -->
        <div class="section">
            <h2>Error Notifications</h2>
            <div class="error" id="error-display">
                No errors.
            </div>
        </div>
    </div>
</body>
</html>
