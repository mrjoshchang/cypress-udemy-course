import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BackButton from '../../components/common/BackButton';

function ButtonsPage() {
  const [doubleClicked, setDoubleClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [stepCounter, setStepCounter] = useState(0);

  const doubleClickHander = () => {
    setDoubleClicked(!doubleClicked);
  };

  let navigate = useNavigate();

  const onGoHomeClick = () => {
    let path = '/';
    navigate(path);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default context menu
    setRightClicked(!rightClicked);
  };

  const incrementCount = () => {
    setStepCounter(stepCounter + 1);
  };

  const decrementCount = () => {
    setStepCounter(stepCounter - 1);
  };

  return (
    <>
      <BackButton />
      <h2 style={{ textDecoration: 'underline' }}>Buttons Page</h2>

      <div>
        <button href="/" onClick={onGoHomeClick}>
          Go home
        </button>
      </div>
      <div>
        <button disabled>Disabled</button>
      </div>
      <div>
        <button onDoubleClick={doubleClickHander}>Double Click!</button>
        {doubleClicked && (
          <p data-cy="dbClickedResponse">Did you double click?</p>
        )}
      </div>
      <div>
        <button onContextMenu={handleContextMenu}>Right-Click Me</button>
        {rightClicked && (
          <p data-cy="rightClickedParagraph">You right clicked!</p>
        )}
      </div>
      <div>
        <button onClick={decrementCount} data-cy="decrement">
          -
        </button>{' '}
        <button onClick={incrementCount} data-cy="increment">
          +
        </button>
        <p>The count is: {stepCounter}</p>
      </div>
    </>
  );
}

export default ButtonsPage;
