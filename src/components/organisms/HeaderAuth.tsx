import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { theme, Text, Button, Spacing, Strong } from 'components/atoms';

type Props = {
  authState: boolean;
  userName: string;
  onLogOut: () => void;
};

const HeaderAuth: FC<Props> = ({ authState, userName, onLogOut }) => {
  switch (authState) {
    case false:
      return (
        <>
          <Link to="/signup">
            <Button className="outlined">Signup</Button>
          </Link>
          <Spacing mRight={theme.small} />
          <Link to="/login">
            <Button className="text" color={theme.light}>
              Login
            </Button>
          </Link>
        </>
      );
    case true:
      return (
        <>
          <Text className="subtitle1" as="p" color={theme.light}>
            <Strong> {userName} </Strong> さん
          </Text>
          <Spacing mRight={theme.small} />
          <Button className="text" color={theme.light} onClick={onLogOut}>
            Logout
          </Button>
        </>
      );
    default:
      return <h1>Error!</h1>;
  }
};

export default HeaderAuth;
