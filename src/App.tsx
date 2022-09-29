import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

// Redux
import store from './redux/store';

// Components
import Navbar from './components/layout/Navbar';
import Builder from './components/pages/Builder';
import Content from './components/pages/Content';
import Biography from './components/pages/Biography';




function App() {

  const showBioModalHandler = () => {
    console.log('showHandler')
  }
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/biography' element={<Biography  />} />
        <Route path='/content' element={<Content />} />
        <Route path='/builder' element={<Builder />} />
        <Route path='/*' element={<Builder />} />
      </Routes>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
