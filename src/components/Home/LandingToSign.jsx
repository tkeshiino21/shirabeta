import React from 'react';
import ContactForm from 'containers/ContactForm';
import * as Yup from 'yup';
import { theme, Text, Spacing, Container } from 'Shared';
import HeroHeader from 'components/Layout/HeroHeader';

const LandingToSign = ({ authState }) => {
  console.log(authState);
  if (authState === true) {
    return null;
  } else {
    return (
      <div style={{ marginTop: '-24px', marginBottom: '40px' }}>
        <Container className="horizontal" height="58vh">
          <HeroHeader />
          <Container
            className="vertical"
            justify="center"
            height="100%"
            style={{ flexGrow: 1 }}
          >
            <Text
              className="responsive"
              as="h1"
              fs="4.4rem"
              lh="1.2"
              color={theme.primary}
            >
              How developers read is
              <br />
              here.
            </Text>
            <Spacing mTop={theme.medium} />
            <Text as="p" fs="1.5rem" lh="1.8" color={theme.primary}>
              Livrioはチームのための図書管理用サービスです。参考になる良書をみんなで共有したいとき、
              あるいは他のチームメイトに推薦したい本があるときにご活用ください。
            </Text>
          </Container>
          <Spacing mRight="-40px" />
          <ContactForm
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .min(8, 'Must be 8 characters or more')
                .required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            })}
          />
        </Container>
      </div>
    );
  }
};

export default LandingToSign;
