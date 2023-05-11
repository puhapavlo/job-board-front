import React from 'react';
import styles from './Homepage.module.scss';
import HomeHeader from "./HomeHeader/HomeHeader";
import CategoriesBlock from "./CategoriesBlock/CategoriesBlock";
import Container from "../../Container/Container";
import CreateProfileBlock from "./CreateProfileBlock/CreateProfileBlock";

const Homepage = () => {
  return (
      <div className={styles.homepage}>
        <HomeHeader />
        <Container>
          <CategoriesBlock />
          <CreateProfileBlock />
        </Container>
      </div>
  );
};

export default Homepage;