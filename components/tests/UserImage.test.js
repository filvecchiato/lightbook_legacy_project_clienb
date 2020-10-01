import React from 'react';
import renderer from 'react-test-renderer';
import UserImage from '../UserImage';

test('renders correctly', () => {
  const tree = renderer.create(<UserImage />).toJSON();
  expect(tree).toMatchSnapshot();
});
