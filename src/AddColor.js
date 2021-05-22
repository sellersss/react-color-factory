import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddColor({ addColor }) {
  const history = useHistory();
  const initialState = { colorName: '', color: '' }
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addColor(formData);
    setFormData(initialState);
    history.push('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='colorName'>Color name:</label>
      <input id='colorName' name='colorName' type='text' onChange={handleChange} />
      <label htmlFor='color'>Color Value:</label>
      <input id='color' name='color' type='color' onChange={handleChange} />
      <button type='submit'>Add color</button>
    </form>
  );
}

export default AddColor;