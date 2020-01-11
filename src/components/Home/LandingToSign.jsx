import React from 'react';
import ContactForm from 'containers/ContactForm';
import { theme, Text, Spacing, Container } from 'Shared';
import HeroHeader from 'Layout/HeroHeader';

const LandingToSign = ({ authState }) => {
  console.log(authState);
  if (authState === true) {
    return null;
  } else {
    return (
      <Container className="horizontal" height="65vh">
        <HeroHeader />
        <Container
          className="vertical"
          justify="center"
          height="100%"
          width="auto"
          style={{ flexGrow: 1 }}
        >
          <Spacing mTop="40px" />
          <Text
            className="responsive"
            as="h1"
            fs="5rem"
            lh="1.2"
            color={theme.primary}
          >
            We provide <br />
            Tech Books info
          </Text>
          <Spacing mTop={theme.medium} />
          <Text as="p" fs="1.8rem" color={theme.primary}>
            Looking for Tech Book? Here is all what you need.
          </Text>
        </Container>
        <ContactForm />
      </Container>
    );
  }
};

export default LandingToSign;
