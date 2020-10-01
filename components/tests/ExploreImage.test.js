import React from 'react';
import renderer from 'react-test-renderer';
import ExploreImage from '../ExploreImage';

test('renders correctly', () => {
  const tree = renderer
    .create(<ExploreImage image={{ urls: { regular: 'test' } }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
