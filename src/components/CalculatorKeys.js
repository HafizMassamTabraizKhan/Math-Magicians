import PropTypes from 'prop-types';
import CalculatorDisplay from './CalculatorDisplay';

function CalculatorKeys({
  btnClick, total, operation, next,
}) {
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
      <button type="button" className="btn orange" onClick={btnClick}>x</button>
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

CalculatorKeys.propTypes = {
  btnClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  operation: PropTypes.string,
  next: PropTypes.string,
};

CalculatorKeys.defaultProps = {
  operation: null,
  next: null,
};

export default CalculatorKeys;
