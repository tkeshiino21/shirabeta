import React from 'react';
import { theme, Spacing } from 'components/atoms';
import { Box } from 'components/atoms';
import FormBookRegister from 'containers/organisms/FormBookRegister';
import LayoutCommon from 'components/organisms/Layout/LayoutCommon';

const Register = () => {
  return (
    <LayoutCommon>
      <Box className="vertical">
        <Spacing mBottom={theme.xlarge}>
          <p>
            ISBNコードを検索後、データに該当のない場合は直接入力してください。
          </p>
        </Spacing>
        <FormBookRegister />
      </Box>
    </LayoutCommon>
  );
};

export default Register;
