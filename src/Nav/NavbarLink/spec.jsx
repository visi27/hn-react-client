import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import NavbarLink from './presenter';

configure({ adapter: new Adapter() });

describe('Nav', () => {
  const props = {
    currentLocation: '/',
    href: '/',
    disabled: false,
    children: 'testLink',
    history: {},
  };

  const propsActiveLink = { ...props, activeKey: 'testLink' };
  const propsDisabledLink = { ...props, disabled: true };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<NavbarLink {...props} />, div);
  });

  test('has valid snapshot', () => {
    const component = renderer.create(<NavbarLink {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows 1 menu item', () => {
    const element = mount(<NavbarLink {...props} />);

    expect(element.find('.nav-item').length).toBe(1);
    expect(element.find('.nav-link').length).toBe(1);

    expect(element.find('.nav-item active').length).toBe(0);
  });

  it('shows 1 active menu item', () => {
    const element = mount(<NavbarLink {...propsActiveLink} />);
    expect(element.find('.nav-item .active').length).toBe(1);
  });

  it('shows 1 disabled menu item', () => {
    const element = mount(<NavbarLink {...propsDisabledLink} />);
    expect(element.find('.nav-item .disabled').length).toBe(1);
  });
});
