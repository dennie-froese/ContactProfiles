import TestRenderer from 'react-test-renderer';
import React from 'react';
import Picture from '.';

describe('Picture', () => {
  it('renders', () => {
    expect(
      TestRenderer.create(<Picture name="Test" />).toJSON(),
    ).toMatchSnapshot();
  });
});
