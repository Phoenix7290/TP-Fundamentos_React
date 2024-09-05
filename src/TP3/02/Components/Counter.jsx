import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <span>{count}</span>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
