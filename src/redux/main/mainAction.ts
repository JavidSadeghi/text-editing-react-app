// import { v4 as uuidv4 } from 'uuid';

// Types
import {
  SET_CURRENT_PAGE,
  TOGGLE_THEME,
} from '../types';


export type Action = {
  type: string,
  payload?: any
}


const setCurrentPage = (page: string): Action => ({
  type: SET_CURRENT_PAGE,
  payload: page
});

const toggleTheme = (): Action => ({
  type: TOGGLE_THEME
});






export {
  setCurrentPage,
  toggleTheme,
};
