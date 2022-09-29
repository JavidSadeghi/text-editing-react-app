import React, { useEffect, useState, FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


// Redux
import { setCurrentPage } from '../../redux/main/mainAction';

// Type
import { CONTENT_PAGE } from '../../redux/types';


// Styles
import styles from './Content.module.css';


const Content: FC = () => {

  const containerRef = useRef<HTMLInputElement>(null);
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const dispatch = useDispatch();
  const parser = new DOMParser();
  // const text = parser.parseFromString(draftToHtml(convertToRaw(editorState.getCurrentContent())), "text/xml");

  

  useEffect(() => {
    dispatch(setCurrentPage(CONTENT_PAGE));
    const savedText = JSON.parse(localStorage.getItem('editorState') || 'false');
    const editorState = savedText ? EditorState.createWithContent(convertFromRaw(savedText)) : EditorState.createEmpty();
    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    containerRef.current!.innerHTML = text;
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textBox} ref={containerRef}></div>
      </div>
    </div>
  )
}

export default Content