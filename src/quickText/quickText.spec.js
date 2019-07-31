import React from 'react';
import { quickText } from '..';
import { cleanup, render } from '@testing-library/react';

const MaybeH1 = quickText('header', 'h1', { id: 'top-header'});
const TestComponent = <MaybeH1 header="I am here render me!" className="styled-header" />

afterEach(cleanup);

describe('Quicktext HOC', () => {
  test('renders nothing if the prop is not provided', () => {
    const { container } = render(<MaybeH1 />);
    expect(container.querySelector('#top-header')).toBeNull();
  })

  test('renders a prop as the text of an html element tag', () => {
    const { container, getByText } = render(TestComponent);
    expect(getByText('I am here render me!')).not.toBeNull();
  });
  
  test('gives the component base props and can add more props', () => {
    const { container } = render(TestComponent);
    expect(container.querySelector('#top-header')).not.toBeNull();
    expect(container.querySelector('.styled-header')).not.toBeNull();
  });

  test('takes the specified prop over children', () => {
    const { queryByText } = render(<MaybeH1 header="Header text" children="Children text" />);
    expect(queryByText('Children text')).toBeNull();
  })
})