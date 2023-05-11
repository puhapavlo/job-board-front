import React from 'react';
import styles from './CategoryBlock.module.scss';
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {setCategory} from '../../../redux/features/jobs/jobsSlice';

const CategoryBlock = ({logo, alt, children}) => {
  const dispatch = useDispatch();
  return (
      <Link onClick={e => dispatch(setCategory(children))} to={'/jobs'} className={styles.category_block}>
        <div className={styles.logo}><img src={logo} alt={alt}/></div>
        <div className={styles.category}>{children}</div>
      </Link>
  );
};

export default CategoryBlock;