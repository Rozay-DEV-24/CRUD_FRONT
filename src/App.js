import React, { useState } from 'react';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      
        {isLoggedIn ? ( <MainPage /> ) : ( <Login onLogin={handleLogin} /> )}
      
    </div>
  );
};

export default App;