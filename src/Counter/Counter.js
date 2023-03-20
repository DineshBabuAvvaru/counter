import React, { useState } from 'react'
import './Counter.css';

function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);
  
    const increment = () => {
      setCount((count) => count + 1);
    };
    const decrement = () => {
      setCount((count) => count - 1);
    };
    const restart = () => {
      setCount(0);
    };
    const switchSigns = () => {
      setCount((count) => count * -1); 
    };
  
    return (
      <div className='heading'> 
        <h1 className='counting'>
          Count: <h3 data-testid="count">{count}</h3>
        </h1>
        <div>
          <button className='btn-1' onClick={increment}> Increment</button>
          <button className='btn-2' onClick={decrement}> Decrement</button>
          <button className='btn-3' onClick={restart}> Restart</button>
          <button className='btn-4' onClick={switchSigns}> Switch Signs</button>
        </div>
      </div>
    );
  }
  
  export default Counter;