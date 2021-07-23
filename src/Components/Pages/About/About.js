import React, { useEffect, useState } from 'react';
import s from './About.module.scss';

export default function About() {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [check, setCheck] = useState('');
  const [sex, setSex] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('myCard')) {
      setData(JSON.parse(localStorage.getItem('myCard')));
    }
  }, []);
  /*
  useEffect(() => {
    if (localStorage.getItem('myCard')) {
      let tempData = undefined;
      const myCard = localStorage.getItem('myCard');
      const json = JSON.parse(myCard);
      tempData = json;
      setData(tempData);
    }
  }, []);
*/
  function handleSurnameChange(event) {
    setSurname(event.target.value); // setState устанавливает данные из event.target.value в surname
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleMiddleNameChange(event) {
    setMiddleName(event.target.value);
  }

  function handleCheckChange(event) {
    setCheck(event.target.checked);
  }

  function handleSexChange(sex) {
    setSex(sex);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const blank = { surname, name, middleName, check, sex }; // объединяем данные в объект
    setData((prev) => {
      const tempData = [...prev];
      tempData.push(blank);
      localStorage.setItem('myCard', JSON.stringify(tempData));
      return tempData;
    });
  }
  return (
    <>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            имя {item.name}, фамилия {item.surname}, отчество {item.middleName},
            семейное положение {item.check ? 'женат/замужем' : 'холост'}, пол{' '}
            {item.sex}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className="mb-3">
          <label className={s.ml}>
            Фамилия
            <input type="text" value={surname} onChange={handleSurnameChange} />
          </label>
        </div>
        <div className="mb-3">
          <label className={s.ml}>
            Имя
            <input
              name="name"
              value={name}
              type="text"
              onChange={handleNameChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className={s.ml}>
            Отчество
            <input
              value={middleName}
              type="text"
              onChange={handleMiddleNameChange}
            />
          </label>
        </div>
        <div className="mb-3 form-check">
          <input
            onChange={handleCheckChange}
            type="checkbox"
            className={s.ml}
            id="exampleCheck1"
          />
          <label className={s.ml} htmlFor="exampleCheck1">
            Женат/Замужем
          </label>
        </div>

        <div className="form-check">
          <input
            onChange={() => handleSexChange('male')}
            className={`form-check-input, ${s.ml}`}
            name="flexRadioDefault"
            type="radio"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            onChange={() => handleSexChange('female')}
            className={`form-check-input, ${s.ml}`}
            name="flexRadioDefault"
            type="radio"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
