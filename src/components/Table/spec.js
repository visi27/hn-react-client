import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Table from './index';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Table', () => {
  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' }
    ],
    onDismiss: () => {}
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Table {...props} />, div);
  });

  test('has valid snapshot', () => {
    const component = renderer.create(<Table {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items on the list', () => {
    const element = mount(<Table {...props} />);
    expect(element.find('.table-row').length).toBe(2);
  });
});
