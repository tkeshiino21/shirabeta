import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from 'Layout';

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <Layout>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </Layout>
  );
};

export default NotFoundPage;
