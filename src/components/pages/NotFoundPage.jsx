import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import LayoutCommon from 'components/organisms/Layout/LayoutCommon';

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <Route
      path="*"
      render={() => (
        <LayoutCommon>
          <h3>
            No match for <code>{location.pathname}</code>
          </h3>
        </LayoutCommon>
      )}
    />
  );
};

export default NotFoundPage;
