import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginSuccess} from "../../../redux/features/auth/authSlice";
import Container from "../../Container/Container";
import styles from './LoginForm.module.scss';
import {Navigate} from "react-router-dom";
import {useAuthUserMutation} from '../../../redux/api/jobBoardApi';
import {Alert, AlertTitle} from '@mui/material';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [authUser, { isLoading, error }] = useAuthUserMutation();
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  let alert = '';

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await authUser({
      username,
      password
    }).unwrap()
    .then((data) => {
      if (data.token) {
        dispatch(loginSuccess(data.token));
      }

      if (!isLoading && isAuth) {
        return <Navigate to='/profile' />;
      }
    })
    .catch(e => {
      setHasError(true);
    });
  }

  if (isAuth) {
    return <Navigate to='/profile' />;
  }

  if (hasError) {
    alert = <Alert severity="error">Incorrect password or username.</Alert>
  }


  return (
        <div className={styles.login_form}>
          <Container>
            <h2 className={styles.title}>Login</h2>
            <div className={styles.alert}>
              {alert}
            </div>
            <form className={styles.form} onSubmit={handleLogin}>
              <input
                  placeholder="Email"
                  type="email"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
              <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          </Container>
        </div>
  );
};

export default LoginForm;