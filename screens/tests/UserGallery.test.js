import React from 'react';
import renderer from 'react-test-renderer';
import UserGallery from '../UserGallery';

test('renders correctly', () => {
  const tree = renderer.create(<UserGallery />).toJSON();
  expect(tree).toMatchSnapshot();
});
