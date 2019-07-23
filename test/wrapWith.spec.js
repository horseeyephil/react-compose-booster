import React from 'react';
import { cleanup, render } from '@testing-library/react';

import wrapWith from '../src/wrapWith';
import { exportAllDeclaration } from '@babel/types';

const Wrapper = props => <div className="wrapper">{props.children}</div>;
const ChildA = props => <span className="dummyA">{props.subText}</span>;
const ChildB = props => <span className="dummyB">{props.moreSubText}</span>;

afterEach(cleanup);

describe('The wrapWith hoc', () => {

  const TwoInAContainer = wrapWith(Wrapper)(ChildA, ChildB);
  const { container, queryByText } = render(<TwoInAContainer subText="I am a nested child!" />);

  test('renders children and passes props correctly', () => {
    expect(container.querySelector('.dummyA')).toBeDefined();
    expect(container.querySelector('.dummyB')).toBeDefined();
    expect(queryByText('I am a nested child!')).toBeDefined();
    expect(container.querySelector('.wrapper').children.length).toBe(2);
  });

  test('wraps with a React Fragment when no argument is provided to the hoc factory', () => {
    const Neighbors = wrapWith()(ChildA, ChildB);

    // this is a little tricky - by default react-testing-library wraps elements in a div for the container
    // with this option we will change the container to a UL 
    // - to show that the rendered elements have no parent between them and the container
    const { container } = render(
      <Neighbors />, { container: document.body.appendChild(document.createElement('ul'))});
    expect(container.querySelector('div')).toBeNull();
    expect(container.querySelector('.dummyA').parentElement.tagName).toBe('UL');
  })
});

describe('The wrapper', () => {
  const SubHeadingComponent = props => (
    <div>
      {props.copy && <h1>{props.copy}</h1>}
      {props.children}
    </div>
  );
  const PossibleSubHeading = wrapWith(SubHeadingComponent, 'subHeading')(ChildA, ChildB);

  test('may recieve distinct props if a key is provided', () => {
    const { queryByText } = render(<PossibleSubHeading subHeading={{ copy: 'Render an h1!' }} />);
    expect(queryByText('Render an h1!')).toBeDefined();
  });
  test('and will not be forwarded the total props', () => {
    const { queryByText } = render(<PossibleSubHeading copy="Try to forward me!" />);
    expect(queryByText('Try to forward me!')).toBeNull();
  });
});

describe('A scenario where children are passed into the resulting component', () => {
  const childComponentTakingChildren = props => <ul className="myInnerChild">{props.children}</ul>;
  const Complicated = wrapWith(Wrapper)(childComponentTakingChildren);

  const { container } = render(
    <Complicated>
      <li/>
      <li/>
      <li/>
    </Complicated>
  );

  expect(
    container.querySelector('.wrapper').children.length
  ).toBe(1);
  expect(
    container.querySelector('.myInnerChild').children.length
  ).toBe(3);
});