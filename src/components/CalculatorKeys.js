import CalculatorDisplay from './CalculatorDisplay';

function CalculatorKeys() {
  return (
    <div className="wrapper">
      <CalculatorDisplay />
      <div className="btn light-gray">AC</div>
      <div className="btn light-gray">+/-</div>
      <div className="btn light-gray">%</div>
      <div className="btn orange">÷</div>
      <div className="btn light-gray">7</div>
      <div className="btn light-gray">8</div>
      <div className="btn light-gray">9</div>
      <div className="btn orange">X</div>
      <div className="btn light-gray">4</div>
      <div className="btn light-gray">5</div>
      <div className="btn light-gray">6</div>
      <div className="btn orange">+</div>
      <div className="btn light-gray">1</div>
      <div className="btn light-gray">2</div>
      <div className="btn light-gray">3</div>
      <div className="btn orange">-</div>
      <div className="btn btn-0 light-gray">0</div>
      <div className="btn light-gray">.</div>
      <div className="btn orange">=</div>
    </div>
  );
}

export default CalculatorKeys;
