import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


// Styles
import styles from './Builder.module.css';

// Redux
import { setCurrentPage } from '../../redux/main/mainAction';
import { AppState } from '../../redux/main/mainReducer';

// Type
import { BUILDER_PAGE } from '../../redux/types';


const Builder: React.FC = () => {

  const [saved, setSaved] = useState<boolean>(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const state = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(BUILDER_PAGE));
    const savedText = JSON.parse(localStorage.getItem('editorState') || 'false');
    setEditorState(savedText ? EditorState.createWithContent(convertFromRaw(savedText)) : EditorState.createEmpty())

    // eslint-disable-next-line
  }, []);


  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  }

  const saveHandler = () => {
    localStorage.setItem('editorState', JSON.stringify(convertToRaw(editorState.getCurrentContent())));
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 1000);
  }

  return (
    <div className={`${styles.main} ${styles[state.theme]}`}>
      <div className={styles.container}>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName={styles.wrapperClass}
          editorClassName={styles.editorClass}
          toolbarClassName={styles.toolbarClass}
           />
        <button className={styles.saveBtn} id={saved ? styles.saved : ''} onClick={saveHandler}>
          {saved ? 'Saved!' : 'Save'}
        </button>
      </div>
    </div>
  )
}

export default Builder