import React from 'react';
import Layout from 'Layout';
import HeroHeader from 'Layout/HeroHeader';
import Trends from 'components/Home/Trends/Trends';
import MileStones from 'components/Home/MileStones/MileStones';
import ContactForm from 'containers/ContactForm';
import { theme, Text, Spacing, Container } from 'Shared';

const Home = ({ fetchedPost }) => {
  return (
    <Layout>
      {console.log('home:', fetchedPost)}
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
      <MileStones />
    </Layout>
  );
};

export default Home;
