import React from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0)

  const handleIncrement = ( value ) => {
    setCounter(counter + value);
  }

  const doubleIncrement = ( value ) => {
    setCounter(counter * value);
  }

  const setInitial = ( value ) => {
    setCounter(value);
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{ counter }</h2>
      <button onClick={ () => handleIncrement(1) }>Add</button>
      <button onClick={ () => handleIncrement(-1) }>Reduce</button>
      <button onClick={ () => doubleIncrement(2) }>Double</button>
      <button onClick={ () => setInitial(0) }>Reset</button>
    </div>
  );
}

export default App;
