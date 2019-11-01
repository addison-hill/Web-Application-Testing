import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('Strike is found', () => {
  const { getByText } = render(<App />);

  getByText(/strikes/i);
});

test('Ball is found', () => {
  const { getByText } = render(<App />);

  getByText(/balls/i);
})