import './Counter.css';

function Counter({id, value, incrementCounter, decrementCounter, resetCounter, deleteCounter}) {

  return (
    <div className="c-wrapper">
       <div className="btnc" onClick={() => {incrementCounter(id)}}>+</div>
       <div className="btnc" onClick={() => {decrementCounter(id)}}>-</div>
       <div className="btnc" onClick={() => {resetCounter(id)}}>R</div>
       <div className="btnc" onClick={() => {deleteCounter(id)}}>X</div>
       <div className="btnc btn-red" >{value}</div>
    </div>
  );
}

export default Counter;
