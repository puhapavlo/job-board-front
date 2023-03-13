import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginSuccess} from "../../../redux/features/auth/authSlice";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/login_check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const { token } = await response.json();
    dispatch(loginSuccess(token));
  }

  return (
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Email</label>
        <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
  );
};

export default LoginForm;