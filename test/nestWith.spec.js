import React from 'react';
import { render } from '@testing-library/react';

import nestWith from '../src/nestWith';

const DummyDiv = props => <div>{props.children}</div>;
const ChildA = props => <span className="dummyA">{props.subText}</span>;
const ChildB = props => <span className="dummyB">{props.moreSubText}</span>;

describe('The nestWith hoc', () => {
  const DivWithSpanA = nestWith(ChildA)(DummyDiv);
  const { container, queryByText } = render(<DivWithSpanA subText="I am a nested child!" />);

  test('gives the target component a child', () => {
    const div = container.querySelector('div');
    expect(div.children.length).toBe(1);
  });

  test('propagates props to the decorator', () => {
    expect(queryByText('I am a nested child!')).toBeDefined();
  });

  test('can take multiple arguments to nest', () => {
    const DivWithMultiple = nestWith(ChildA, ChildB)(DummyDiv);

    const result = render(<DivWithMultiple subText="multiple" moreSubText="arguments" />);
    const { children } = result.container.querySelector('div');

    expect(children.length).toBe(2);
    expect(result.queryByText('multiple')).toBeDefined();
    expect(result.queryByText('arguments')).toBeDefined();
  });
});