import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Search from './';

describe('Search', () => {

  const props = {
    searchTerm: 'redux',
    onSearchChange: () => {},
    onSearchSubmit: () => {},
    onReset: () => {},
    children: 'Search'
  };

  it('renders without cashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search {...props} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Search {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
