import React from 'react';
import Search from './presenter';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Search', () => {
  let wrapper;

  const props = {
    searchTerm: 'redux',
    onSearchChange: () => {},
    onSearchSubmit: () => {},
    onReset: () => {},
    children: 'Search'
  };

  test('has a valid snapshot', () => {
    const component = shallow(<Search {...props} />);
    let tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
