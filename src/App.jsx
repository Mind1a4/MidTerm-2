import React, { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [valuesArray, setValuesArray] = useState([]);

  useEffect(() => {
    const localStorageValue = JSON.parse(localStorage.getItem('valueArray'));
    if (localStorageValue) {
      setValuesArray(localStorageValue);
    }
  }, []);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSetValue = (e) => {
    e.preventDefault();

    setValuesArray((prev) => {
      const setLocalArry = [...prev, value];

      localStorage.setItem('valueArray', JSON.stringify(setLocalArry));

      return setLocalArry;
    });
    setValue('');
  };

  return (
    <>
      <h1 className='text-3xl font-bold text-center'>Midterm 2</h1>
      <form onSubmit={handleSetValue}>
        <input
          type='text'
          value={value}
          placeholder='input'
          onChange={handleValue}
        />
        <button type='submit'>btn</button>
      </form>
      <ul>
        {valuesArray.map((value, index) => (
          <li key={`${value} + ${index}`}>{value}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
