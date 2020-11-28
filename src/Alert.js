import React, { useEffect } from 'react';

function Alert({ type, msg, removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return <div className={`alert alert-${type}`}>{msg}</div>;
}

export default Alert;
