import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { theme, Box, Paper, Button, Spacing } from 'components/atoms';
import LayoutCommon from 'components/organisms/Layout/LayoutCommon';
import FormFormat from 'components/molecules/FormFormat';

const AuthPagesTemplate = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/auth/signUp');
  };
  const location = useLocation();
  console.log(location);
  return (
    <LayoutCommon>
      <Box style={{ alignSelf: 'center', flexBasis: '400px' }}>
        <Paper>
          <Box className="vertical" justify="center">
            <Spacing mTop={theme.xlarge} />
            <Button onClick={handleClick}>hello</Button>
          </Box>
        </Paper>
      </Box>
    </LayoutCommon>
  );
};

export default AuthPagesTemplate;
