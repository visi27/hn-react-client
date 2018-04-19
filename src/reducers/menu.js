import { MENU_LOAD } from '../constants/actionTypes';
import MenuConfig from '../config/menu';

const initialState = {
  elements: MenuConfig,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MENU_LOAD:
      return state;
    default:
      return state;
  }
}
