import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';

const tree = renderer.create(<Input label={'test'} value={'test2'} />).toJSON();

test('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});

test('Pass the correct title from props', () => {
  const title = tree[0];
  expect(title.children[0]).toBe('test');
});

test('Pass the correct value from props', () => {
  const input = tree[1];
  expect(input.props.value).toBe('test2');
});
