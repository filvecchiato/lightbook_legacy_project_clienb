import React from 'react';
import renderer from 'react-test-renderer';
import Curate from '../Curate';

test('renders correctly', () => {
  const tree = renderer.create(<Curate />).toJSON();
  expect(tree).toMatchSnapshot();
});
