import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue text-white p-4 shadow">
      <div className="container">
        <h1 className="text-2xl font-bold">Secure File Storage System</h1>
        <p className="text-sm">Powered by IBM Cloud Object Storage</p>
      </div>
    </header>
  );
};

export default Header;
