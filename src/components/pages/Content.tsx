import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


// Redux
import { setCurrentPage } from '../../redux/main/mainAction';
import { AppState } from '../../redux/main/mainReducer';

// Type
import { CONTENT_PAGE } from '../../redux/types';


// Styles
import styles from './Content.module.css';


const Content: React.FC = () => {

  const containerRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state);

  

  useEffect(() => {
    dispatch(setCurrentPage(CONTENT_PAGE));
    const savedText = JSON.parse(localStorage.getItem('editorState') || 'false');
    const editorState = savedText ? EditorState.createWithContent(convertFromRaw(savedText)) : EditorState.createEmpty();
    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    containerRef.current!.innerHTML = text;

    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${styles.main} ${styles[state.theme]}`}>
      <div className={styles.container}>
        <div className={styles.textBox} ref={containerRef}></div>
      </div>
    </div>
  )
}

export default Content