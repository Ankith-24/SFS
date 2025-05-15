import React, { useEffect } from 'react';

const Notification = ({ notification, setNotification }) => {
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification, setNotification]);

  if (!notification) return null;

  const { type, message } = notification;

  const notificationStyles = {
    container: {
      position: 'fixed',
      top: '16px',
      right: '16px',
      padding: '16px',
      borderRadius: '4px',
      border: '1px solid',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      maxWidth: '320px',
      zIndex: 1000,
      backgroundColor: type === 'success' ? '#e6f7e6' : '#fae6e6',
      color: type === 'success' ? '#2c662d' : '#9c1f1f',
      borderColor: type === 'success' ? '#a3d9a3' : '#e6a3a3',
    },
    content: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      width: '20px',
      height: '20px',
      marginRight: '8px',
    },
    closeButton: {
      position: 'absolute',
      top: '4px',
      right: '4px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: '#666',
      padding: '4px',
    }
  };

  return (
    <div style={notificationStyles.container}>
      <div style={notificationStyles.content}>
        {type === 'success' ? (
          <svg style={notificationStyles.icon} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg style={notificationStyles.icon} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )}
        <span>{message}</span>
      </div>
      <button
        onClick={() => setNotification(null)}
        style={notificationStyles.closeButton}
      >
        <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default Notification;
