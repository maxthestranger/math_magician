import operate from '../logic/operate';

const op = ['+', '-', 'x', '÷', '%'];

describe('operate login group', () => {
  test.each(op)('test for operation result', (operation) => {
    const mock = jest.fn((a, b, o) => {
      if (o === '+') {
        return (a + b).toString();
      }

      if (o === '-') {
        return (a - b).toString();
      }

      if (o === 'x') {
        return (a * b).toString();
      }

      if (o === '÷') {
        return (a / b).toString();
      }

      if (o === '%') {
        return (a % b).toString();
      }

      return `Unknown operation '${o}'`;
    });
    const numberOne = Math.floor(Math.random() * 10 + 1);
    const numberTwo = Math.floor(Math.random() * 10 + 1);

    expect(Math.floor(operate(numberOne, numberTwo, operation))).toBe(
      Math.floor(mock(numberOne, numberTwo, operation)),
    );
  });
});
