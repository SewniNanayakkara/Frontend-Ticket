// Import necessary dependencies for testing
import { render, screen } from '@testing-library/react';
import App from './App';

// Test that the App component renders correctly
test('renders learn react link', () => {
  // Render the App component
  render(<App />);
  
  // Get the link element with the text "learn react"
  const linkElement = screen.getByText(/learn react/i);
  
  // Expect the link element to be present in the document
  expect(linkElement).toBeInTheDocument();
});
