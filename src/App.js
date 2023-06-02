import React from 'react';
import Calculator from './components/Calculator';
import QuoteComponent from './components/Quotes';
import './App.css';

function App() {
  return (
    <div className="container">
      <QuoteComponent />
      <Calculator />
    </div>
  );
}

export default App;
