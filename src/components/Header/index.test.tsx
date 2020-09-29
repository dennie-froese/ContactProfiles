import TestRenderer from 'react-test-renderer';
import React from 'react';
import Header from '.';

describe('Amount', () => {
  it('renders', () => {
    expect(TestRenderer.create(<Header />).toJSON()).toMatchSnapshot();
  });
});
