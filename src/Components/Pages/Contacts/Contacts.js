import React from 'react';
import s from './Contacts.module.scss';
import ContactLinkBack from './ContactLinkBack';

export const Contacts = () => (
  <>
    <ContactLinkBack />
    <hr />
    <div
      className={`card text-dark bg-info mb-4 ${s.contacts}`}
      style={{ maxWidth: `18rem` }}
    >
      <div className="card-header">Feel free to ask</div>
      <div className="card-body">
        <div className="card-text">
          <strong>e-mail: </strong>example@example.com
        </div>
      </div>
    </div>
  </>
);
