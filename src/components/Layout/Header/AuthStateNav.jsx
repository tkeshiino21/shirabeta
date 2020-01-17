import React from 'react';
import { Link } from 'react-router-dom';
import { theme, Text, Button, Spacing, Strong } from 'Shared';

const AuthStateNav = ({ onLogOut, authState, userName }) => {
  console.log('Headerauth:', authState);
  console.log('Headeruser:', userName);
  switch (authState) {
    case false:
      return (
        <>
          <Link to="/signup">
            <Button className="primary" style={{ padding: '5px 10px' }}>
              Signup
            </Button>
          </Link>

          <Spacing mRight={theme.small} />
          <Link to="/login">
            <Button
              className="text"
              color={theme.light}
              mRight={theme.small}
              to="/login"
            >
              Login
            </Button>
          </Link>
        </>
      );
    case true:
      return (
        <>
          <Text color={theme.light} fs={theme.small}>
            <Strong fs="12px"> {userName} </Strong> さん
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
