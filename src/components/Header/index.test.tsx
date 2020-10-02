import TestRenderer from 'react-test-renderer';
import React from 'react';
import Header from '.';

describe('Header', () => {
  it('renders', () => {
    expect(TestRenderer.create(<Header />).toJSON()).toMatchSnapshot();
  });
});
