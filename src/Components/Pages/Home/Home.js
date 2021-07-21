import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/about" className="card-link">
            Card link
          </Link>
          <Link to="/contacts" className="card-link">
            Another link
          </Link>
        </div>
      </div>
      <hr />

      <h1>Counter: {counter}</h1>
      <button onClick={increment} type="button" className="btn btn-success">
        Increase
      </button>
    </div>
  );
};
