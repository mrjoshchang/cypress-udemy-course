import React from 'react';

const TriggerButton = ({
  label,
  eventDescription,
  onClick,
  onRightClick,
  onDoubleClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
}) => {
  const onClickHandler = () => {
    if (onClick) onClick();
  };

  const onDoublelickHandler = (event) => {
    event.preventDefault();
    if (onDoubleClick) onDoubleClick();
  };

  const onRightClickHandler = (event) => {
    event.preventDefault();
    if (onRightClick) onRightClick();
  };

  const onMouseDownHandler = (event) => {
    event.preventDefault();
    if (onMouseDown) onMouseDown();
  };

  const onMouseEnterHandler = (event) => {
    event.preventDefault();
    if (onMouseEnter) onMouseEnter();
  };

  const onMouseLeaveHandler = (event) => {
    event.preventDefault();
    if (onMouseLeave) onMouseLeave();
  };

  const onMouseMoveHandler = (event) => {
    event.preventDefault();
    if (onMouseMove) onMouseMove();
  };

  const onMouseOutHandler = (event) => {
    event.preventDefault();
    if (onMouseOut) onMouseOut();
  };

  const onMouseOverHandler = (event) => {
    event.preventDefault();
    if (onMouseOver) onMouseOver();
  };

  const onMouseUpHandler = (event) => {
    event.preventDefault();
    if (onMouseUp) onMouseUp();
  };

  return (
    <div>
      <button
        onClick={onClickHandler}
        onContextMenu={onRightClickHandler}
        onDoubleClick={onDoublelickHandler}
        onMouseDown={onMouseDownHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        onMouseMove={onMouseMoveHandler}
        onMouseOut={onMouseOutHandler}
        onMouseOver={onMouseOverHandler}
        onMouseUp={onMouseUpHandler}
      >
        {label}
      </button>
      <div> {eventDescription}</div>
    </div>
  );
};

export default TriggerButton;
