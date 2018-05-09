import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import React from 'react';
import algolia from '../_config/algolia';
import Item from './Item';
import ResultsView from './presenter';

configure({ adapter: new Adapter() });

describe('ResultsView', () => {
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
      searchTerm: algolia.DEFAULT_QUERY,
    },
  };
  test('has valid snapshot', () => {
    const component = shallow(<ResultsView {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  it('shows two items on the list', () => {
    const element = shallow(<ResultsView {...props} />);
    expect(element.find(Item).length).toBe(2);
  });
});
