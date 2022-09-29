import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';


// Redux
import { setCurrentPage } from './redux/main/mainAction';
import { AppState } from './redux/main/mainReducer';

// Type
import { BIOGRAFI_PAGE } from './redux/types';


// Components
import Navbar from './components/layout/Navbar';
import Builder from './components/pages/Builder';
import Content from './components/pages/Content';
import Biography from './components/pages/Biography';





function App() {

  const state = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const showBioModalHandler = () => {
    dispatch(setCurrentPage(BIOGRAFI_PAGE));
  }
  return (

    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/biography' element={<Biography showBioModal={showBioModalHandler} theme={state.theme} />} />
        <Route path='/content' element={<Content />} />
        <Route path='/builder' element={<Builder />} />
        <Route path='/*' element={<Builder />} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
