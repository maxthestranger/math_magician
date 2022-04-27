import calculate from '../logic/calculate';

const vals = {
  obj: {
    total: null,
    next: null,
    operation: null,
  },

  numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  objZero: {
    total: null,
    next: '0',
    operation: null,
  },
  objOptn: {
    total: null,
    next: '8',
    operation: '+',
  },
  objEqual: {
    total: '87',
    next: '52',
    operation: '+',
  },
};

describe('calculate test group', () => {
  // when AC
  test('expect to return object with null values', () => {
    expect(calculate(vals.obj, 'AC')).toEqual(vals.obj);
  });

  //   when buttonName is a number
  test.each(vals.numbers)(
    'expect object value next = buttonName and total null',
    (expected) => {
      expect(calculate(vals.obj, expected)).toEqual({
        next: expected,
        total: null,
      });
    },
  );

  //   when the value is zero
  test('expect an empty object', () => {
    expect(calculate(vals.objZero, '0')).toEqual({});
  });

  //   when opeation and next is a number above 0
  test('expect an object value next to be vals.obj.next + number', () => {
    expect(calculate(vals.objZero, '8')).toEqual({
      total: null,
      next: '8',
    });
  });

  //   when the = is clicked
  test('expect an empty object', () => {
    expect(calculate(vals.objEqual, '=')).toEqual({
      total: '139',
      next: null,
      operation: null,
    });
  });
});
