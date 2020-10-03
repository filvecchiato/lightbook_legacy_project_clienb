import React from 'react';
import renderer from 'react-test-renderer';
import AppButton from '../AppButton';

test('renders correctly', () => {
  const tree = renderer.create(<AppButton title="test" />);
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Pass the correct title from props', () => {
  const tree = renderer.create(<AppButton title="test" />);
  const instance = tree.root;
  expect(instance.props.title).toBe('test');
});

test('The text component contain the prop value', () => {
  const tree = renderer.create(<AppButton title="test" />);
  expect(tree.toJSON().children[0].children[0]).toBe('test');
});
