import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { either, ifProp } from '..';

const DummyDiv = props => <div>{props.text}</div>;
const DummyImg = props => <img alt={props.text} />;

afterEach(cleanup);

describe('The Either hoc', () => {
  const testFn = props => props.text === 'For InnerText';

  const ImageOrDiv = either(testFn, DummyImg)(DummyDiv);

  test('renders the "right" component if the predicate is true', () => {
    const { queryByAltText, queryByText } = render(<ImageOrDiv text="For InnerText" />);

    expect(queryByAltText('For InnerText')).toBeNull();
    expect(queryByText('For InnerText')).not.toBeNull();
  });

  test('renders the "left" component if the predicate is false', () => {
    const { queryByAltText, queryByText } = render(<ImageOrDiv text="For Alt" />);

    expect(queryByAltText('For Alt')).not.toBeNull();
    expect(queryByText('For Alt')).toBeNull();
  });

  test('renders nothing if the predicate is false and no second argument is provided', () => {
    const DivOrNothing = either(testFn)(DummyDiv);
    expect(DivOrNothing({ text: 'Wrong prop' })).toBeNull();
  });

  // To-do: test on plain js functions
});

describe('The ifProp hoc', () => {
  const ImageOrDiv = ifProp('text', DummyImg)(DummyDiv);

  test('renders the "right component" if the prop is present', () => {
    const { queryByAltText, queryByText } = render(<ImageOrDiv text="For InnerText" />);

    expect(queryByAltText('For InnerText')).toBeNull();
    expect(queryByText('For InnerText')).not.toBeNull();
  });

  test('renders nothing if the prop is present', () => {
    const DivOrNothing = ifProp('text')(DummyDiv);
    expect(DivOrNothing({ alt: 'For Alt' })).toBeNull();
  });
});