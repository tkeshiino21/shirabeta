import React from 'react';
import { theme, Spacing, Box } from 'components/atoms';

import FormBookRegister from 'containers/templates/FormBookRegister';
import LayoutCommon from 'components/organisms/LayoutCommon';

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
