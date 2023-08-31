import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './Login.css';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username !== 'Admin' && password !== 'Stu123') {
      setError('Invalid username and password');
      setUsername('');
      setPassword('');
    } else if (username !== 'Admin') {
      setError('Invalid username');
      setUsername('');
      setPassword('');
    } else if (password !== 'Stu123') {
      setError('Invalid password');
      setUsername('');
      setPassword('');
    } else {
      setError('');
      onLogin();
    }
  };

  return (
    <div>
      <div className='loginContainer'>
        <h2 className='loginTitle'>Admin</h2>
        <input
          className="loginButton"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="loginButton"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="loginButton" variant="contained" onClick={handleLogin}>
          Login
        </Button>
        {error && <p className='errorMessage'>{error}</p>}
      </div>
    </div>
  );
};

export default Login;


