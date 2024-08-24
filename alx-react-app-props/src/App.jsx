import WelcomeMessage from './components/WelcomeMessage';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserContext } from './UserContext'; // Ensure this path is correct

function App() {
  const userData = { name: "Jane Doe", age: "30", bio: "Enthusiastic software developer", email: "jane.doe@example.com" };

  return (
    <div className="App">
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserContext.Provider value={userData}>
        <UserProfile />
        <ProfilePage />
      </UserContext.Provider>
      <Footer />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
