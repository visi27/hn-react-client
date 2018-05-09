import MenuConfig from '../_config/menu';
import { MENU_LOAD } from '../_constants/actionTypes';

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
