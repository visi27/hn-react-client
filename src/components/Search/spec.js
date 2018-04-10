import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Search from './';
import configureStore from '../../stores/configureStore.prod';

describe('Search', () => {
  const store = configureStore();

  const props = {
    store,
    searchTerm: 'redux',
    onSearchChange: () => {},
    onSearchSubmit: () => {},
    onReset: () => {},
    children: 'Search'
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search {...props} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Search {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
