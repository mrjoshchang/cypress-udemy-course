import React, { useState } from 'react';
import BackButton from '../../components/common/BackButton';

const DropdownsPage = () => {
  // Define state variable to hold the selected option
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle dropdown selection changes
  const handleSingleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Options for the dropdown
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ];

  // Handle dropdown selection changes
  const handleMultipleDropdownChange = (e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  return (
    <>
      <div>
        <BackButton />
        <h2 style={{ textDecoration: 'underline' }}>Dropdown Page</h2>

        <h3>Dropdown Example</h3>
        <label htmlFor="dropdown">Select an Option:</label>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleSingleDropdownChange}
        >
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <p>Selected Option: {selectedOption}</p>
      </div>

      <div>
        <h3>Multi-Select Dropdown Example</h3>
        <label htmlFor="multiSelect">Select Options:</label>
        <select
          id="multiSelect"
          multiple
          value={selectedOptions}
          onChange={handleMultipleDropdownChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p>Selected Options: {selectedOptions.join(', ')}</p>
      </div>
    </>
  );
};

export default DropdownsPage;
