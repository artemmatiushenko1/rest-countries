import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Property } from 'components/property';

test('should correctly render Property value', () => {
  render(<Property name="Native name" value="Україна" />);

  const paragraphElement = screen.getByText(/Україна/i);

  expect(paragraphElement).toBeInTheDocument();
});

test('should correctly render Property name', () => {
  render(<Property name="Native name" value="Україна" />);

  const paragraphElement = screen.getByText(/Native name/i);

  expect(paragraphElement).toBeInTheDocument();
});
