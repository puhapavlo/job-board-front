import React from 'react';
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import styles from "./Header.module.scss"
import MainMenu from "../menus/MainMenu/MainMenu";
import LoginMenu from "../menus/LoginMenu/LoginMenu";

const Header = () => {
  return (
      <header>
        <Container>
          <div className={styles.header}>
            <Logo />
            <MainMenu />
            <LoginMenu />
          </div>
        </Container>
      </header>
  );
};

export default Header;