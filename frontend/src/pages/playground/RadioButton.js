import React, { useState } from 'react';
import BackButton from '../../components/common/BackButton';

const RadioPage = () => {
  // Define state variable to store the selected radio button value
  const [selectedOption, setSelectedOption] = useState('');

  // Handle radio button changes
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <BackButton />
      <h2 style={{ textDecoration: 'underline' }}>Radio Button Page</h2>

      <h3>Radio Button Group Example</h3>
      <label>
        <input
          type="radio"
          name="options"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="options"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleRadioChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="options"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleRadioChange}
        />
        Option 3
      </label>
      <div>
        <h3>Selected Option:</h3>
        <p>{selectedOption}</p>
      </div>
    </div>
  );
};

export default RadioPage;
