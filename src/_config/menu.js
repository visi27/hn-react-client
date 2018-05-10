import * as menuTypes from '../_constants/menu';

export default [
  {
    title: 'Home',
    type: menuTypes.LINK_MENU_TYPE,
    href: '/',
  },
  {
    title: 'Latest',
    type: menuTypes.LINK_MENU_TYPE,
    href: '/latest',
    disabled: false,
  },
  {
    title: 'Ask HN',
    type: menuTypes.LINK_MENU_TYPE,
    href: '/ask',
    disabled: false,
  },
  {
    title: 'Show HN',
    type: menuTypes.LINK_MENU_TYPE,
    href: '/show',
    disabled: false,
  },
  {
    title: 'Favorites',
    type: menuTypes.LINK_MENU_TYPE,
    href: '/favorites',
    disabled: false,
  },
];
