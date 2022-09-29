import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppState } from '../../redux/main/mainReducer';

// Styles
import styles from './Navbar.module.css';

// Types
import { BUILDER_PAGE, CONTENT_PAGE, BIOGRAFI_PAGE, LIGHT, DARK } from '../../redux/types';

// Redux
import { toggleTheme } from '../../redux/main/mainAction';




const Navbar: React.FC = () => {

  const state = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const storageTheme = JSON.parse(localStorage.getItem('theme') || JSON.stringify(LIGHT));
    if(storageTheme !== state.theme) {
      toggleThemeHandler();
    }

    // eslint-disable-next-line
  }, []);

  const toggleThemeHandler = () => {
    if(state.theme === LIGHT){
      localStorage.setItem('theme', JSON.stringify(DARK));
    }else {
      localStorage.setItem('theme', JSON.stringify(LIGHT));
    }
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
        <div className={styles.menuBtn}>
        <Link to='/biography' className={state.currentPage === BIOGRAFI_PAGE ? styles.active : ''}>
          <p>Biography</p>
        </Link>
        </div>
      </div>
      <div className={styles.darkLight} onClick={toggleThemeHandler}>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar