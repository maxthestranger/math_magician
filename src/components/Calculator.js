import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnValue) {
    const { obj } = this.state;
    const newObj = { ...obj, ...calculate(obj, btnValue) };
    this.setState({
      obj: newObj,
    });
  }

  render() {
    const { obj } = this.state;
    const result = obj.next || obj.total;
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
          value={result ? Number(result) : ''}
          disabled
        />
        <div>{}</div>

        <div className="calculator-keys">
          {btnData.map((btn) => (
            <Button key={btn} value={btn} handleClick={this.handleClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
