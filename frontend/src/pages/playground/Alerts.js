import BackButton from '../../components/common/BackButton';

const AlertsPage = () => {
  // Alert box
  const showAlert = () => {
    alert('This is a simple alert message!');
  };

  // Confirm box
  const showConfirm = () => {
    const userConfirmed = window.confirm('Are you sure you want to proceed?');
    if (userConfirmed) {
      // Handle the confirmation action here
      alert('Confirmed!');
    } else {
      // Handle the cancel action here
      alert('Cancelled!');
    }
  };

  // Prompt box
  const showPrompt = () => {
    const userInput = window.prompt('Please enter something:');
    if (userInput !== null) {
      // Handle the user's input (e.g., display it in an alert)
      alert(`You entered: ${userInput}`);
    } else {
      // Handle if the user cancels the prompt
      alert('Prompt was cancelled.');
    }
  };

  return (
    <>
      {' '}
      <BackButton />
      <h2 style={{ textDecoration: 'underline' }}>Alerts Page</h2>
      <div>
        <h2>Basic JavaScript Alert</h2>
        <button onClick={showAlert} data-cy={'show-alert'}>
          Show Alert
        </button>
      </div>
      <div>
        <h2>Confirmation Prompt Example</h2>
        <button onClick={showConfirm} data-cy={'show-confirmation-alert'}>
          Show Confirmation Prompt
        </button>
      </div>
      <div>
        <h2>Prompt Alert Example</h2>
        <button onClick={showPrompt} data-cy={'show-prompt-alert'}>
          Show Prompt Alert
        </button>
      </div>
    </>
  );
};

export default AlertsPage;
