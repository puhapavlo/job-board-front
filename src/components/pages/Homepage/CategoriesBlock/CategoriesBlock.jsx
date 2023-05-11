import React from 'react';
import styles from './CategoriesBlock.module.scss';
import CategoryBlock from "../../../UI/CategoryBlock/CategoryBlock";
import marketing from "../../../../assets/icons/categories/marketing.svg";
import design from "../../../../assets/icons/categories/design.svg";
import finance from "../../../../assets/icons/categories/finance.svg";
import programming from "../../../../assets/icons/categories/programming.svg";
import project from "../../../../assets/icons/categories/project.svg";
import business from "../../../../assets/icons/categories/business.svg";
import graphic from "../../../../assets/icons/categories/graphic.svg";
import video from "../../../../assets/icons/categories/video.svg";

const CategoriesBlock = () => {
  return (
      <div>
        <h2 className={styles.title}>Choose Categories</h2>
        <div className={styles.categories}>
          <CategoryBlock logo={marketing} alt="marketing" link="/jobs?category=Marketing & Communication" >Marketing & Communication</CategoryBlock>
          <CategoryBlock logo={design} alt="design" link="/jobs?category=UI / UX Design" >UI / UX Design</CategoryBlock>
          <CategoryBlock logo={finance} alt="finance" link="/jobs?category=Finance Management" >Finance Management</CategoryBlock>
          <CategoryBlock logo={programming} alt="programming" link="/jobs?category=Programming" >Programming</CategoryBlock>
          <CategoryBlock logo={project} alt="project" link="/jobs?category=Project Management">Project Management</CategoryBlock>
          <CategoryBlock logo={business} alt="business" link="/jobs?category=Business & Consulting" >Business & Consulting</CategoryBlock>
          <CategoryBlock logo={graphic} alt="graphic" link="/jobs?category=Graphic Designer" >Graphic Designer</CategoryBlock>
          <CategoryBlock logo={video} alt="video" link="/jobs?category=Video Editor" >Video Editor</CategoryBlock>
        </div>
      </div>
  );
};

export default CategoriesBlock;