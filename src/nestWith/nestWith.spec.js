import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { nestWith } from '..';

const DummyDiv = props => <div className="parent">{props.children}</div>;
const ChildA = props => <span className="dummyA">{props.subText}</span>;
const ChildB = props => <span className="dummyB">{props.moreSubText}</span>;

afterEach(cleanup);

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

  test('will render a child prop, yet will not pass children elements to the nested decorators', () => {
    const ChildTakesChildren = props => <div className="child">{props.children}</div>;
    const Complication = nestWith(ChildTakesChildren)(DummyDiv);
    const { container } = render(
      <Complication><span className="topLevelChild"/></Complication>
    );
    expect(container.querySelectorAll('.topLevelChild').length).toBe(1);
    expect(container.querySelector('.parent').children.length).toBe(2);
    expect(container.querySelector('.child').children.length).toBe(0);

  })
});

describe('When provided with an object', () => {

  const NestWithMapping = nestWith({
    headerB: ChildA,
    headerB: ChildB
  })(DummyDiv);

  test('nestWith propagates the keyed props to the nested children', () => {
    const { queryByText } = render(
      <NestWithMapping
        subText="Should not render"
        moreSubText="Also should not render"
        headerA={{ subText: 'This will render in ChildA' }}
        headerB={{ moreSubText: 'This will render in ChildB' }}
      />
    );
    expect(queryByText('This will render in ChildA')).toBeDefined();
    expect(queryByText('This will render in ChildB')).toBeDefined();
    expect(queryByText('Should not render')).toBeNull();
    expect(queryByText('Also should not render')).toBeNull();
  })
})