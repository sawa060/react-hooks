import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  const increment2 = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement2 = () => {
    setCount(prevCount => prevCount - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const multiply = () => {
    setCount(prevCount => prevCount * 2)
  }

  const devision3 = () => {
    if (count % 3 === 0) {
      setCount(prevCount => prevCount / 3)
    } else return
  }

  return (
    <>
      <div>
        count: {count}
      </div>
      <button onClick={increment}> +1 </button>
      <button onClick={decrement}> -1 </button>
      <div>
        <button onClick={increment2}> +1 </button>
        <button onClick={decrement2}> -1 </button>
      </div>
      <div>
        <button onClick={reset}> Reset </button>
        <button onClick={multiply}> x2 </button>
        <button onClick={devision3}> 3の倍数の時だけ3で割る </button>
      </div>
    </>
    );
  }

  export default App
