import React, { useState } from 'react';
import BackButton from '../../components/common/BackButton';

const CheckboxPage = () => {
  // Define state variable to store checkbox values
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  // Handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  return (
    <div>
      <BackButton />
      <h2 style={{ textDecoration: 'underline' }}>Checkbox Page</h2>

      <h3>Checkbox Group Example</h3>
      <label>
        <input
          type="checkbox"
          name="option1"
          checked={checkboxes.option1}
          onChange={handleCheckboxChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="option2"
          checked={checkboxes.option2}
          onChange={handleCheckboxChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="option3"
          checked={checkboxes.option3}
          onChange={handleCheckboxChange}
        />
        Option 3
      </label>
      <div>
        <h3>Selected Options:</h3>
        <ul>
          {Object.keys(checkboxes).map(
            (option) => checkboxes[option] && <li key={option}>{option}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CheckboxPage;
