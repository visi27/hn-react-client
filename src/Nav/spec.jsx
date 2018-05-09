import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import * as menuTypes from '../_constants/menu';
import Nav from './presenter';

configure({ adapter: new Adapter() });

describe('Nav', () => {
  const props = {
    elements: [
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
    ],
    searchTerm: '',
    history: {},
    onSearchChange: () => {},
    onSearchSubmit: () => {},
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Nav {...props} />, div);
  });

  test('has valid snapshot', () => {
    const component = renderer.create(<Nav {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows 3 menu items', () => {
    const element = mount(<Nav {...props} />);
    expect(element.find('.nav-item').length).toBe(3);
  });

  it('shows 1 dropdown menu ', () => {
    const element = mount(<Nav {...props} />);
    expect(element.find('.nav-item .dropdown').length).toBe(1);
  });
});
