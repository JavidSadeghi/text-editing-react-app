import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppState } from '../../redux/main/mainReducer';

// Styles
import styles from './Navbar.module.css';

// Types
import { BUILDER_PAGE, CONTENT_PAGE, BIOGRAFI_PAGE } from '../../redux/types';

// Redux
import { setCurrentPage, toggleTheme } from '../../redux/main/mainAction';




const Navbar = () => {

  const state = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  }


  return (
    <div className={`${styles.header} ${styles[state.theme]}`}>
      <div className={styles.menuBox}>
        <div className={styles.menuBtn}>
          <Link to='/builder' className={state.currentPage === BUILDER_PAGE ? styles.active : ''}>
            <p>Builder</p>
          </Link>
        </div>
        <div className={styles.menuBtn}>
          <Link to='/content' className={state.currentPage === CONTENT_PAGE ? styles.active : ''}>
            <p>Content</p>
          </Link>
        </div>
        <div className={styles.menuBtn} onClick={() => dispatch(setCurrentPage(BIOGRAFI_PAGE))}>
        <Link to='/biography' className={state.currentPage === BIOGRAFI_PAGE ? styles.active : ''}>
          <p>Biography</p>
        </Link>
        </div>
      </div>
      <div className={`${styles.darkLight} ${styles[state.theme]}`} onClick={toggleThemeHandler}>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar