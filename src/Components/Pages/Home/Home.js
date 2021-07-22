import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContactsItem from '../Contacts/ContactsItem';

export const Home = () => {
  const history = useHistory();
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter((prev) => prev + 1);
  }

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <button
            onClick={() => history.push(`/contacts/${counter}`)}
            type="button"
            className={'btn btn-info'}
          >
            <span>Go to contact</span>
          </button>
        </div>
        <ContactsItem counter={counter} />
      </div>
      <hr />

      <h1>Counter: {counter}</h1>
      <button
        onClick={increaseCounter}
        type="button"
        className="btn btn-success"
      >
        Increase
      </button>
    </div>
  );
};
