import React, { useState } from 'react';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type='text' value={inputValue} onChange={handleOnChange} />
    </form>
  );
};

export default AddCategory;
