import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import calculate from '../logic/calculate';

function CalculatorKeys() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const btnClick = (e) => {
    const res = calculate({ total, next, operation }, e.target.innerText);
    setTotal(res.total);
    setNext(res.next);
    setOperation(res.operation);
  };

  return (
    <div className="wrapper">
      <CalculatorDisplay total={Number(total)} operation={operation} next={next} />
      <button type="button" className="btn light-gray" onClick={btnClick}>AC</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>+/-</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>%</button>
      <button type="button" className="btn orange" onClick={btnClick}>÷</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>7</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>8</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>9</button>
      <button type="button" className="btn orange" onClick={btnClick}>X</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>4</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>5</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>6</button>
      <button type="button" className="btn orange" onClick={btnClick}>+</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>1</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>2</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>3</button>
      <button type="button" className="btn orange" onClick={btnClick}>-</button>
      <button type="button" className="btn btn-0 light-gray" onClick={btnClick}>0</button>
      <button type="button" className="btn light-gray" onClick={btnClick}>.</button>
      <button type="button" className="btn orange" onClick={btnClick}>=</button>
    </div>
  );
}

export default CalculatorKeys;
