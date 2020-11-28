import React, { useEffect } from 'react';

function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <div className={`alert alert-${type}`}>{msg}</div>;
}

export default Alert;
