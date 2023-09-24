import BackButton from '../../components/common/BackButton';
import { useState } from 'react';

const FormPage = () => {
  const defaultForm = {
    firstName: '',
    lastName: '',
    email: '',
  };
  const [formData, setFormData] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const newErrors = {};

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the form data to your server or perform any desired action.

    // Check each field for emptiness
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name cannot be empty';
    } else newErrors.firstName = '';
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last name cannot be empty';
    } else newErrors.lastName = '';
    if (formData.email.trim() === '') {
      newErrors.email = 'Email cannot be empty';
    } else newErrors.email = '';

    // If there are errors, set them in the state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // No errors, proceed with form submission
      // ...
      setErrors({});
      console.log('Form submitted:', formData);
    }

    // Mark the form as submitted
    if (
      newErrors.firstName === '' &&
      newErrors.lastName === '' &&
      newErrors.email === ''
    )
      setSubmitted(true);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setFormData(defaultForm);
    setSubmitted(false);
  };

  return (
    <>
      {' '}
      <BackButton />
      <h2 style={{ textDecoration: 'underline' }}>Form Page</h2>
      <h3>Test Forms</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && (
            <p style={{ color: 'red' }} data-cy="firstNameError">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && (
            <p style={{ color: 'red' }} data-cy="lastNameError">
              {errors.lastName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p style={{ color: 'red' }} data-cy="emailError">
              {errors.email}
            </p>
          )}
        </div>
        <button onClick={clearForm}>Clear</button>{' '}
        <button type="submit">Submit</button>
      </form>
      <div>
        {submitted && (
          <div>
            <h3>Submitted Data:</h3>
            <p data-cy="submittedFirstName">First Name: {formData.firstName}</p>
            <p data-cy="submittedLastName">Last Name: {formData.lastName}</p>
            <p data-cy="submittedEmail">Email: {formData.email}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FormPage;
