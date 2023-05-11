import React from 'react';
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import Container from "../Container/Container";
import styles from "./Footer.module.scss";
import {useSelector} from 'react-redux';

const Footer = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
        <footer>
          <Container>
          <div className={styles.footer}>
            <div className={styles.content}>
              <div className={styles.description}>
                <Logo />
                <p>Joobs is the largest talent platform for career development and recruitment.</p>
              </div>
              <div className={styles.menu}>
                <h4>Profile</h4>
                {!isAuth
                    ?
                    <div className={styles.menu}>
                      <Link to='/login'>Login</Link>
                      <Link to='/register'>Register</Link>
                    </div>
                  :
                  <Link to='/profile'>Your profile</Link>
                }
              </div>
              <div className={styles.menu}>
                <h4>Employer</h4>
                <Link to='/jobs'>Careers</Link>
              </div>
              <div>
                <h4>Address</h4>
                <a href="mail:pablopukha@gmail.com">pablopukha@gmail.com</a>
                <address>Lutsk National Technical University, Lustsk, Ukraine</address>
              </div>
            </div>
            <div className={styles.copyright}>© 2023 Pavlo Pukha - All rights reserved.</div>
          </div>
          </Container>
        </footer>
  );
};

export default Footer;