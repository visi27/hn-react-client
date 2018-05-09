import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './presenter';

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header onSort={() => {}} activeSort="COMMENTS" />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Header onSort={() => {}} activeSort="COMMENTS" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
