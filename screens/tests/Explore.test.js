import React from 'react';
import renderer from 'react-test-renderer';
import Explore from '../Explore';

test('renders correctly', () => {
  const tree = renderer.create(<Explore />).toJSON();
  expect(tree).toMatchSnapshot();
});
