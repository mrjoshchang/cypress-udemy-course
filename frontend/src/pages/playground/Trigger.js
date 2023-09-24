import React, { useState } from 'react';
import BackButton from '../../components/common/BackButton';
import TriggerButton from '../../components/TriggerButton';

const mouseEventMessages = {
  click: '',
  rightClick: '',
  doubleClick: '',
  mouseDown: '',
  mouseEnter: '',
  mouseLeave: '',
  mouseMove: '',
  mouseOut: '',
  mouseOver: '',
  mouseUp: '',
};

const TriggerPage = () => {
  const [eventDescription, setEventDescription] = useState(mouseEventMessages);

  const onClickHandler = () => {
    if (eventDescription.click) setEventDescription(mouseEventMessages);
    else
      setEventDescription({
        ...mouseEventMessages,
        click: 'A user clicks on an element',
      });
  };

  const onRightClickHandler = () => {
    if (eventDescription) setEventDescription('');
    else
      setEventDescription({
        ...mouseEventMessages,
        rightClick: 'A user right-clicks on an element',
      });
  };

  const onDoubleClickHandler = () => {
    if (eventDescription) setEventDescription('');
    else
      setEventDescription({
        ...mouseEventMessages,
        doubleClick: 'The user double-clicks on an element',
      });
  };

  const onMouseDownHandler = () => {
    if (eventDescription) setEventDescription('');
    else
      setEventDescription({
        ...mouseEventMessages,
        mouseDown: 'A mouse button is pressed over an element',
      });
  };

  const onMouseEnterHandler = () => {
    if (eventDescription) setEventDescription('');
    else
      setEventDescription({
        ...mouseEventMessages,
        mouseEnter: 'The pointer is moved onto an element',
      });
  };

  const onMouseLeaveHandler = () => {
    if (eventDescription) setEventDescription('');
    else
      setEventDescription({
        ...mouseEventMessages,
        mouseLeave: 'The pointer is moved out of an element',
      });
  };

  const onMouseMoveHandler = () => {
    if (eventDescription) setEventDescription('');
    else
      setEventDescription({
        ...mouseEventMessages,
        mouseMove: 'The pointer is moving over an element',
      });
  };

  // eslint-disable-next-line no-unused-vars
  const onMouseOutHandler = () => {
    if (eventDescription) setEventDescription('');
    else
      setEventDescription({
        ...mouseEventMessages,
        mouseOut: 'The mouse pointer moves out of an element',
      });
  };

  // eslint-disable-next-line no-unused-vars
  const onMouseOverHandler = () => {
    if (eventDescription) setEventDescription('');
    else
      setEventDescription({
        ...mouseEventMessages,
        mouseOver: 'The mouse pointer is moved over an element',
      });
  };

  const onMouseUpHandler = () => {
    if (eventDescription) setEventDescription('');
    else
      setEventDescription({
        ...mouseEventMessages,
        mouseUp: 'The mouse button is released over an element',
      });
  };

  return (
    <div>
      <BackButton />
      <h2>Trigger Page</h2>
      <TriggerButton
        label="Click Me"
        onClick={onClickHandler}
        eventDescription={eventDescription.click}
      />
      <TriggerButton
        label="Right Click Me"
        onRightClick={onRightClickHandler}
        eventDescription={eventDescription.rightClick}
      />
      <TriggerButton
        label="Double Click Me"
        onDoubleClick={onDoubleClickHandler}
        eventDescription={eventDescription.doubleClick}
      />
      <TriggerButton
        label="Click Down On Me"
        onMouseDown={onMouseDownHandler}
        eventDescription={eventDescription.mouseDown}
      />
      <TriggerButton
        label="Hover Over Me"
        onMouseEnter={onMouseEnterHandler}
        eventDescription={eventDescription.mouseEnter}
      />
      <TriggerButton
        label="Move Out Of Me"
        onMouseLeave={onMouseLeaveHandler}
        eventDescription={eventDescription.mouseLeave}
      />
      <TriggerButton
        label="Move Around In Me"
        onMouseMove={onMouseMoveHandler}
        eventDescription={eventDescription.mouseMove}
      />
      <TriggerButton
        label="Release Click On Me"
        onMouseUp={onMouseUpHandler}
        eventDescription={eventDescription.mouseUp}
      />
    </div>
  );
};

export default TriggerPage;
