import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('Booting system...');
    const [progressNumb, setProgressNumb] = useState(null);
    useEffect(() => {
    setTimeout(() => {
          setProgressNumb(1);
          setMessage('Succesfully booted.')
    }, 2000);
  
    setTimeout(() => {
        setLoading(false);
    }, 4000); 

  }, []);

  return (
    <div className={`loader ${loading ? 'loading' : ''}`}>
      {loading && (
        <div className="loader-content">
        <div className="loader-text">{message}</div>   
          <progress value={progressNumb} />
        </div>
      )}
    </div>
  );
};

export default Loader;
