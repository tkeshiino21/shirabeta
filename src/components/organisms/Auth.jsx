import React from 'react';
import { Redirect, useHistory } from 'react-router';

const Auth = ({ authState, children }) => {
  return authState === true ? null : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );
};

export default Auth;
