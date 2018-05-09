import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import React from 'react';
import { App } from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  test('has a valid snapshot', () => {
    const component = shallow(<App onLoad={() => {}} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
