import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import * as menuTypes from '../../../_constants/menu';
import NavbarDropdownLink from './presenter';

configure({ adapter: new Adapter() });

describe('Nav', () => {
  const props = {
    dropdown: {
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
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<NavbarDropdownLink {...props} />, div);
  });

  test('has valid snapshot', () => {
    const component = renderer.create(<NavbarDropdownLink {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows 2 dropdown items', () => {
    const element = mount(<NavbarDropdownLink {...props} />);
    expect(element.find('a.dropdown-item').length).toBe(2);
  });

  it('shows 1 dropdown menu ', () => {
    const element = mount(<NavbarDropdownLink {...props} />);
    expect(element.find('.nav-item .dropdown').length).toBe(1);
  });
});
