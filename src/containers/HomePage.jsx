import React from 'react';
import Layout from '../components/App/Layout';
import HeroHeader from '../components/App/HeroHeader';
import Trends from '../components/Trends';
import ContactForm from '../components/Contact/ContactForm';
import { theme, Text, Spacing, Container } from '../shared';

const HomePage = () => {
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

export default HomePage;
