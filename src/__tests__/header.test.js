import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

test('renders', () => {
  render(<Header />, { wrapper: MemoryRouter });

  expect(screen.getByText(/Math Magicians/i)).toBeInTheDocument();
});
