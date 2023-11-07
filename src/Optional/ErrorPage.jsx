import React from 'react';

const ErrorPage = () => {
  const goBack = () => {
    window.history.back();
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-4xl text-red-500 font-bold mb-4">404 Error</h1>
        <p className="text-gray-600 text-lg mb-8">The page you are looking for does not exist.</p>
        <button onClick={goBack} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Go Back</button>
      </div>
    </div>
  );
};

export default ErrorPage;
