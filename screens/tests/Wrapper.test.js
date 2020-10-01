import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../Wrapper';

test('renders correctly', () => {
  const tree = renderer.create(<Wrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
