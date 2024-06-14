import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RedirectPage = () => {
  const history = useHistory();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      history.push('/');
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className="container">
      <h1 className="redirect-message"> to Home Page...</h1>
    </div>
  );
}

export default RedirectPage;
