import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container" style={{ padding: '20px', textAlign: 'center' }}>
            <p>You clicked {count} times. </p>
            <button onClick={() => setCount(count +1)}>Click me</button>
        </div>
    )
}

export default Counter;