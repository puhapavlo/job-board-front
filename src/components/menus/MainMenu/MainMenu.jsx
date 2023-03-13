import React from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  return (
      <ul className={styles.menu}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/jobs'>Jobs</NavLink>
        </li>
        {/*<li>*/}
        {/*  <Link to='/'></Link>*/}
        {/*</li>*/}
      </ul>
  );
};

export default MainMenu;