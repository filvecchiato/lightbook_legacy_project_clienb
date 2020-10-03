import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../Image';

test('renders correctly', () => {
  const tree = renderer.create(<Image image={{ url: 'test' }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
