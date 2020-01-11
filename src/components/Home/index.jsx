import React from 'react';
import Layout from 'Layout';
import MileStones from 'components/Home/MileStones/MileStones';
import { theme, Spacing, ImgContainer } from 'Shared';
import LandingToSign from 'containers/LandingToSign';
import loader from 'images/loader.gif';

const Home = ({ fetchedPost }) => {
  return (
    <Layout>
      {console.log('home:', fetchedPost)}
      <LandingToSign />

      <Spacing mTop={theme.large} />
      <MileStones />
    </Layout>
  );
};

export default Home;
