import React from 'react';

const FilterSelect = ({ onChange, options }) => (
  <select onChange={onChange} className="p-2 border rounded">
    {options.map((option, index) => (
      <option key={index} value={option.value}>{option.label}</option>
    ))}
  </select>
);

export default FilterSelect;