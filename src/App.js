import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Counter from './Counter';
import './App.css';

function App() {

  const [counters, setCounters] = useState([]);

  const numberCountes = counters.length;

  const totalValuesCountes = counters.reduce((tot, counter) => tot + counter.value, 0);

  const resetAllCounters = () => {
    setCounters([]);
  };

  const addNewCounter = () => {
    if (numberCountes) {
      setCounters(prevCounters => prevCounters.map(counter => {
        if (counter.value % 2 === 0) {
          return {...counter, value: counter.value + 1}
        } else {
          return counter;
        }
      }));
    }
    setCounters(prevCounters => [...prevCounters, {id: uuidv4(), value: 0}]);
  };

  const incrementCounter = (id) => {
    setCounters(prevCounters => prevCounters.map(counter => {
      if (counter.id === id) {
        return {...counter, value: counter.value + 1}
      } else {
        return counter;
      }
    }));
  };

  const decrementCounter = (id) => {
    setCounters(prevCounters => prevCounters.map(counter => {
      if (counter.id === id) {
        if (counter.value === 0) {
          alert("Counter can`t be negative!");
          return counter;
        }
        return {...counter, value: counter.value - 1}
      } else {
        return counter;
      }
    }));
  };

  const resetCounter = (id) => {
    setCounters(prevCounters => prevCounters.map(counter => {
      if (counter.id === id) {
        return {...counter, value: 0}
      } else {
        return counter;
      }
    }));
  };


  const deleteCounter = (id) => {
    setCounters(prevCounters => prevCounters.filter(counter => counter.id !== id));
    if (numberCountes) {
      setCounters(prevCounters => prevCounters.map(counter => {
        if (counter.value % 2 !== 0) {
          return {...counter, value: counter.value - 1}
        } else {
          return counter;
        }
      }));
    }
  };
  


  return (
    <div className="wrapper">
      <div className="main-btns">
        <div className="btn" onClick={addNewCounter}>Add Counter</div>
        <div className="btn" onClick={resetAllCounters}>Reset</div>
      </div>
      <div className="info">
        Number of counters: {numberCountes}
        <br />
        Total values of counters: {counters ? totalValuesCountes : 0}
      </div>
      <div className="counters-wrapper">
        {counters && counters.map(counter => (<Counter key={counter.id} 
        id={counter.id} 
        value={counter.value}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
        resetCounter={resetCounter}
        deleteCounter={deleteCounter}
        />))}
      </div>
    </div>
  );
}

export default App;
