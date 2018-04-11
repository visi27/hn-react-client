import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('App', () => {
  test('has a valid snapshot', () => {
    const component = shallow(<App onLoad={()=>{}} />);
    let tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
