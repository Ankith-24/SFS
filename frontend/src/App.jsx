import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import Notification from './components/Notification';

// Set the base URL for axios
axios.defaults.baseURL = 'http://localhost:3001/api';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [notification, setNotification] = useState(null);

  const handleFileUpload = () => {
    // Trigger a refresh of the file list
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />

      <Header />

      <main className="container py-4">
        <div className="grid grid-cols-1 gap-6 grid-cols-md-3">
          <div>
            <FileUpload
              onFileUpload={handleFileUpload}
              setNotification={setNotification}
            />
          </div>

          <div>
            <FileList
              refreshTrigger={refreshTrigger}
              setNotification={setNotification}
            />
          </div>
        </div>
      </main>

      <footer style={{ backgroundColor: '#333', color: 'white', padding: '16px', marginTop: '32px' }}>
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Secure File Storage System</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
