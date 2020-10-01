import React from 'react';
import renderer from 'react-test-renderer';
import AppButton from '../AppButton';

test('renders correctly', () => {
  const tree = renderer.create(<AppButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
