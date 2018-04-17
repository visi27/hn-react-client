import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './index';

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header onSort={() => {}} activeSort={'COMMENTS'} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Header onSort={() => {}} activeSort={'COMMENTS'} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
