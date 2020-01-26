import React from 'react';
import LandingAuthForm from 'containers/organisms/LandingAuthForm';
import { theme, Box, Text, Spacing, Container } from 'components/atoms';
import MainWrapper from 'components/molecules/MainWrapper';
import { signUpValidation } from 'components/molecules/Validation';
import HeroHeader from 'components/molecules/HeroHeader';

const LandingView = ({ authState }) => {
  if (authState === true) {
    return null;
  } else {
    return (
      <Box height="58vh">
        <HeroHeader />
        <MainWrapper>
          <Box className="vertical" justify="center">
            <Text
              className="responsive"
              as="h1"
              className="h3"
              color={theme.primary}
            >
              How developers read is here.
            </Text>
            <Spacing mTop={theme.medium} />
            <Text as="p" className="subtitle2" color={theme.primary}>
              Livrioはチームのための図書管理サービスです。参考になる良書をみんなで共有したいとき、
              あるいは他のチームメイトに推薦したい本があるときにご活用ください。
            </Text>
          </Box>
          <Spacing mRight={theme.large} />
          <Box basis="300px" align="center">
            <LandingAuthForm />
          </Box>
        </MainWrapper>
      </Box>
    );
  }
};

export default LandingView;
