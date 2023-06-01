import PropTypes from 'prop-types';

function CalculatorDisplay({ total, operation, next }) {
  return (
    <div className="display-screen">
      {total}
      {operation}
      {next}
    </div>
  );
}

CalculatorDisplay.propTypes = {
  total: PropTypes.number,
  operation: PropTypes.string,
  next: PropTypes.string,
};

CalculatorDisplay.defaultProps = {
  total: '',
  operation: null,
  next: null,
};

export default CalculatorDisplay;
