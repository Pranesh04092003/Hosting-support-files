import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before redirecting
    const timer = setTimeout(() => {
      // Redirect to the provided URL
      window.location.href = 'https://fs-bywb.onrender.com/';
    }, 1890); // Adjust the delay as needed

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <h2>Loading..</h2>
        </div>
      ) : (
        <h1>Redirecting...</h1>
      )}
    </div>
  );
}

export default App;
