import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calc from '../components/Calc';

const btnData = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

test('loads and displays', async () => {
  render(<Calc />);
  expect(screen.getByDisplayValue('0')).toBeDisabled();
});

test.each(btnData)('test button component', (btn) => {
  render(<Calc />);
  expect(screen.getByText(btn)).toBeInTheDocument();
});
