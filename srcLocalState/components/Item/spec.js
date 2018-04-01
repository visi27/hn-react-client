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
    objectID: 'y'
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Item item={item} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Item item={item} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
