import React from 'react';
import Layout from 'Layout';
import HeroHeader from 'Layout/HeroHeader';
import Trends from 'components/templates/Trends/Trends';
import ContactForm from 'components/templates/Contact/ContactForm';
import { theme, Text, Spacing, Container } from 'Shared';

const Home = () => {
  return (
    <Layout>
      <HeroHeader />
      <Container className="horizontal" height="65vh">
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
      <Spacing mTop={theme.large} />
      <Trends />
    </Layout>
  );
};

export default Home;
