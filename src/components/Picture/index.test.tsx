import TestRenderer from 'react-test-renderer';
import React from 'react';
import Picture from '.';

describe('Amount', () => {
  it('renders', () => {
    expect(TestRenderer.create(<Picture />).toJSON()).toMatchSnapshot();
  });
});
