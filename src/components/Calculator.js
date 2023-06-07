import React, { useState } from 'react';
import CalculatorKeys from './CalculatorKeys';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnClick = (e) => {
    setState(calculate(state, e.target.innerText));
  };

  return (
    <div className="math-content">
      <h2>Let&apos;s do math!</h2>
      <CalculatorKeys
        btnClick={btnClick}
        total={Number(state.total)}
        operation={state.operation}
        next={state.next}
      />
    </div>
  );
}

export default Calculator;
