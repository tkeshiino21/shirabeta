import React from 'react';
import { theme, Text, Button, Spacing, Strong } from 'Shared';

const AuthStateNav = ({ onLogOut, authState, userName }) => {
  console.log('Headerauth:', authState);
  console.log('Headeruser:', userName);
  switch (authState) {
    case false:
      return (
        <>
          <Button className="primary" style={{ padding: '5px 10px' }}>
            Signup
          </Button>
          <Spacing mRight={theme.small} />
          <Button className="text" color={theme.light} mRight={theme.small}>
            Login
          </Button>
        </>
      );
    case true:
      return (
        <>
          <Text color={theme.light} fs={theme.small}>
            ようこそ<Strong fs={theme.medium}> {userName} </Strong> さん
          </Text>
          <Spacing mRight={theme.small} />
          <Button
            className="text"
            color={theme.light}
            mRight={theme.small}
            onClick={onLogOut}
          >
            Logout
          </Button>
        </>
      );
    default:
      return <h1>Error!</h1>;
  }
};

export default AuthStateNav;
