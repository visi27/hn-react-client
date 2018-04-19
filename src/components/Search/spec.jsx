import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { configure, shallow } from 'enzyme';
import Search from './presenter';

configure({ adapter: new Adapter() });

describe('Search', () => {
  const props = {
    searchTerm: 'redux',
    onSearchChange: () => {},
    onSearchSubmit: () => {},
    onReset: () => {},
    children: 'Search',
  };

  test('has a valid snapshot', () => {
    const component = shallow(<Search {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
