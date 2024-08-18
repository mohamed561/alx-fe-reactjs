import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Counter</h2>
      <p style={{ fontSize: '24px', margin: '20px 0' }}>Current Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ fontSize: '18px', margin: '0 10px', padding: '5px 10px' }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)}
        style={{ fontSize: '18px', margin: '0 10px', padding: '5px 10px' }}
      >
        Decrement
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{ fontSize: '18px', margin: '0 10px', padding: '5px 10px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;