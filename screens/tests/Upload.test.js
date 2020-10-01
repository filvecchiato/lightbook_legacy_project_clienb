import React from 'react';
import renderer from 'react-test-renderer';
import Upload from '../Upload';

test('renders correctly', () => {
  const tree = renderer.create(<Upload />).toJSON();
  expect(tree).toMatchSnapshot();
});
