import { useState } from 'react';
import DisplayCount from './DisplayCount';

export default function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <DisplayCount count={count} />
        </div>
    )
}