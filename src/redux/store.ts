import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./main/mainReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;