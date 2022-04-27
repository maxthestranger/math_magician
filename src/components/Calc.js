import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

export default function Calc() {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnValue) => {
    setCalcObj({ ...calcObj, ...calculate(calcObj, btnValue) });
  };

  const result = calcObj.next || calcObj.total;
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
  return (
    <div className="calculator">
      <input
        type="text"
        className="calculator-screen"
        // eslint-disable-next-line react/destructuring-assignment
        value={result ? Number(result) : 0}
        disabled
      />
      <div>{}</div>

      <div className="calculator-keys">
        {btnData.map((btn) => (
          <Button key={btn} value={btn} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
