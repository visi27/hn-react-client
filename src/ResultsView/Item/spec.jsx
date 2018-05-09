import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Item from './index';

describe('Item', () => {
  const item = {
    title: '1',
    author: '1',
    num_comments: 1,
    points: 2,
    objectID: 'y',
    created_at: '2018-04-03T09:35:47.000Z',
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Item item={item} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Item item={item} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
