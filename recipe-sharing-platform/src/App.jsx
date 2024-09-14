import React from 'react';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-gray-100 min-h-screen">
      <HomePage />
      </div>
      <h1 className="text-4xl font-bold text-blue-500">
        Recipe Sharing Platform
      </h1>
    </div>
  );
}

export default App;
