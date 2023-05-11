import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({children, to, className = ''}) => {
  return (
      <Link className={styles.button} to={to}>
        {children}
      </Link>
  );
};

export default Button;