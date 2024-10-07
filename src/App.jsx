import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [inputvale, setinputValue] = useState('');
  const [valuesArray, setValuesArray] = useState([]);

  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  const handValue = (e) => {
    e.preventDefault();
    setinputValue(value);
    setValuesArray((perv) => setValuesArray([...perv, inputvale]));
  };

  return (
    <>
      <h1 className='text-3xl font-bold text-center'>Midterm 2</h1>
      <form>
        <input
          type='text'
          value={value}
          placeholder='input'
          onChange={handleInputValue}
        />
        <button type='submit' onClick={handValue}>
          btnv
        </button>
      </form>
      <p>{valuesArray}</p>
    </>
  );
}

export default App;
