import React from 'react';

export default function ContactsItem(props) {
  const { counter } = props;
  return <div>Вы находитесь на странице контактов. Контакт № {counter}</div>;
}
