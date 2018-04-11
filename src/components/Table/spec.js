import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Table from './presenter';
import Adapter from 'enzyme-adapter-react-16';
import { AppConfig as conf } from '../../config';

configure({ adapter: new Adapter() });

describe('Table', () => {
  const props = {
    result: {
      hits: [
        { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
        { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' }
      ],
      page: 0,
      nbPages: 0,
      searchTerm: conf.DEFAULT_QUERY
    }
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

  it('shows one header on the list', () => {
    const element = mount(<Table {...props} />);
    expect(element.find('.table-header').length).toBe(1);
  });
});
