// Import necessary dependencies for React application
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS styles
import App from './App'; // Import main App component
import reportWebVitals from './reportWebVitals'; // Import web vitals reporting function

// Create root element for React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render App component within React Strict Mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
