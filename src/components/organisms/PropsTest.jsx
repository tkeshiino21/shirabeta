import React from 'react';

const Message = ({ name, weather, templeture }) => {
  return `Hello ${name}! Today is ${weather}. It's ${templeture}`;
};

export default Message;

const ComponentTwo = () => {
  return <Message name={name} {...props} />;
};

const ComponentThree = () => {
  return <Message />;
};

export default PropsTest;
