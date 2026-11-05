import useState from 'react'
import React from "react";
import './../styles/App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
    <p>Button clicked {counter} times</p>
    <button onClick={()=>setCounter(count + 1)}>Click me</button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
