import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from './presenter';
import conf from '../../config';

configure({ adapter: new Adapter() });

describe('Table', () => {
  const props = {
    result: {
      hits: [
        {
          title: '1',
          author: '1',
          num_comments: 1,
          points: 2,
          objectID: 'y',
          created_at: '2018-04-03T09:35:47.000Z',
        },
        {
          title: '2',
          author: '2',
          num_comments: 1,
          points: 2,
          objectID: 'z',
          created_at: '2018-04-03T09:35:47.000Z',
        },
      ],
      page: 0,
      nbPages: 0,
      searchTerm: conf.DEFAULT_QUERY,
    },
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Table {...props} />, div);
  });

  test('has valid snapshot', () => {
    const component = renderer.create(<Table {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items on the list', () => {
    const element = mount(<Table {...props} />);
    expect(element.find('.item').length).toBe(2);
  });
});
