import * as menuTypes from '../constants/menu';

export default [
  {
    title: 'Menu',
    type: menuTypes.LINK_MENU_TYPE,
    href: '#',
  },
  {
    title: 'Another Menu',
    type: menuTypes.LINK_MENU_TYPE,
    href: '#',
  },
  {
    title: 'Dropdown',
    type: menuTypes.DROPDOWN_MENU_TYPE,
    href: '#',
    id: 'dd01',
    children: [
      {
        title: 'SubMenu',
        type: menuTypes.LINK_MENU_TYPE,
        href: '#',
      },
      {
        title: 'Another SubMenu',
        type: menuTypes.LINK_MENU_TYPE,
        href: '#',
      },
    ],
  },
];
