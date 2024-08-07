// components/InputForm.js
import React, { useState } from 'react';

function InputForm({ onCalculate }) {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [unit, setUnit] = useState('km');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(parseFloat(distance), time, unit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Distance"
        required
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="km">km</option>
        <option value="mile">mile</option>
      </select>
      <input
        type="text"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Time (HH:MM:SS)"
        required
      />
      <button type="submit">Calculate</button>
    </form>
  );
}

export default InputForm;