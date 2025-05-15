import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onFileUpload, setNotification }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setNotification({
        type: 'error',
        message: 'Please select a file to upload'
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setNotification({
        type: 'success',
        message: 'File uploaded successfully!'
      });

      // Refresh the file list
      onFileUpload();

      // Reset the file input
      setFile(null);
      e.target.reset();
    } catch (error) {
      console.error('Error uploading file:', error);
      setNotification({
        type: 'error',
        message: error.response?.data?.message || 'Error uploading file'
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Upload File</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="file" className="mb-2 font-medium text-gray">
            Select File
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="mb-4"
            required
          />
        </div>
        <button
          type="submit"
          disabled={uploading}
          style={{ width: '100%' }}
        >
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
