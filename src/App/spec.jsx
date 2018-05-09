import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import React from 'react';
import App from './presenter';

configure({ adapter: new Adapter() });
const props = {
  onLoad: () => {},
  onLocationChange: () => {},
  location: { pathname: '/' },
};
describe('App', () => {
  test('has a valid snapshot', () => {
    const component = shallow(<App {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
