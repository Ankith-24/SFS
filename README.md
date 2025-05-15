# Secure File Storage System (SFS)

A web application for securely storing and retrieving files using IBM Cloud Object Storage.

## Project Structure

- `frontend/`: React application with Tailwind CSS
- `backend/`: Express.js API server

## Features

- User-friendly interface for file management
- Secure file upload and download
- Integration with IBM Cloud Object Storage
- Responsive design for mobile and desktop

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd SFS
   ```

2. Install frontend dependencies
   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies
   ```
   cd ../backend
   npm install
   ```

### Running the Application

1. Start the backend server
   ```
   cd backend
   npm run dev
   ```

2. Start the frontend development server
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

- `POST /api/upload`: Upload a file
- `GET /api/files`: Get a list of all files
- `GET /api/download/:filename`: Download a specific file

## Technologies Used

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js
- **Storage**: IBM Cloud Object Storage