import React from 'react';
import renderer from 'react-test-renderer';
import UserImage from '../UserImage';

test('renders correctly', () => {
  const tree = renderer.create(<UserImage image={{ url: 'test' }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
