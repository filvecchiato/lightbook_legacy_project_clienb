import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../Image';

const tree = renderer.create(<Image image={{ url: 'test' }} />).toJSON();

test('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});

test('Pass the correct title from props', () => {
  expect(tree.type).toBe('View');
});

test('The text component contain the prop value', () => {
  console.log(tree.children[0]);
  expect(tree.children[0].props.source.uri).toBe('test');
});
