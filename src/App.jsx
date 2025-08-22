import React, { useEffect, useState } from 'react'
import { MainApp } from "./styled.js";

const App = () => {
  const storageKeyName = "awesomeApp";
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0);

  const [count, setCount] = useState(retrieveCountValue());
  
  const addCount = (count) => setCount(Number(count) + 1);

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));
  },[count]);

  return (
    <MainApp>
      Hello World!

      <button onClick={() => addCount(count)}>
        Count is {count}
      </button>

    </MainApp>
  )
}

export default App
