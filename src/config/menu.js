import * as menuTypes from '../constants/menu';

export default [
  {
    title: 'Home',
    type: menuTypes.LINK_MENU_TYPE,
    href: '/',
  },
  {
    title: 'Search',
    type: menuTypes.LINK_MENU_TYPE,
    href: '/search',
    disabled: false,
  },
  {
    title: 'Popular',
    type: menuTypes.LINK_MENU_TYPE,
    href: '/popular',
    disabled: false,
  },
  {
    title: 'Favorites',
    type: menuTypes.LINK_MENU_TYPE,
    href: '/favorites',
    disabled: true,
  },
];
