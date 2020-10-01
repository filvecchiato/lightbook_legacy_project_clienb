import React from 'react';
import renderer from 'react-test-renderer';
import ExploreImage from '../ExploreImage';

test('renders correctly', () => {
  const tree = renderer.create(<ExploreImage />).toJSON();
  expect(tree).toMatchSnapshot();
});
