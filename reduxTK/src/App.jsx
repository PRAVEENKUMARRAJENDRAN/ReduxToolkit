import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  amountAdded,
} from "./features/counter/counterSlice";

import { useFetchBreedsQuery } from "./features/dog/dogSlice";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [numDogs,setNumDogs] = useState(10);

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>The Count is {count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(amountAdded(3))}
        >
          Add amount
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </div>
      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Pictures</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
