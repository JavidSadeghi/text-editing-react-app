
import { Action } from "./mainAction";

// Types
import {
  SET_CURRENT_PAGE,
  TOGGLE_THEME,
  BUILDER_PAGE,
  LIGHT,
  DARK,
} from '../types';

export interface AppState {
  texts: {}[],
  currentPage: string,
  theme: string,
}

const initialState = {
  texts: [],
  currentPage: BUILDER_PAGE,
  theme: LIGHT,
}



const mainReducer = (state:AppState = initialState, action: Action) => {
  const { type, payload } = action;
  switch(type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload
      }
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === LIGHT ? DARK : LIGHT
      }
    default: return state
  }
}

export default mainReducer;