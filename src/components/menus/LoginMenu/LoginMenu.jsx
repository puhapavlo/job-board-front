import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./LoginMenu.module.scss";

const LoginMenu = () => {
  return (
      <div className={styles.menu}>
        <Link className={styles.menu_login} to='/login'>Login</Link>
        <Button to='/register'>Sign Up</Button>
      </div>
  );
};

export default LoginMenu;