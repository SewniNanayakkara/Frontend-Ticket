// Function to report web performance metrics
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is a valid function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import web-vitals library
    import('web-vitals').then(({ 
      getCLS, getFID, getFCP, getLCP, getTTFB 
    }) => {
      // Report metrics
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export reportWebVitals function
export default reportWebVitals;
