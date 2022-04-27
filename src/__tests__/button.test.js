import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

test('loads and displays', async () => {
  render(<Button value="5" />);
  expect(screen.getByRole('button')).not.toBeDisabled();
});
