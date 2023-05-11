import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Button from "../../UI/Button/Button";
import styles from "./LoginMenu.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {logoutSuccess} from "../../../redux/features/auth/authSlice";

const LoginMenu = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    navigate('/');
  }
  if (!isAuth) {
    return (
        <div className={styles.menu}>
          <Link className={styles.menu_login} to='/login'>Login</Link>
          <Button to='/register'>Sign Up</Button>
        </div>
    );
  }
  else {
    return (
        <div className={styles.menu}>
          <Button to='/profile'>Profile</Button>
          <button className={styles.logout} onClick={e => handleLogout(e)}>Logout</button>
        </div>
    );
  }
};

export default LoginMenu;