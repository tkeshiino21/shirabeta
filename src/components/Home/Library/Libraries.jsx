import React from 'react';
import { Route } from 'react-router';
import LibraryDetail from 'components/Home/Library/LibraryDetail/LibraryDetail';
import Library from 'components/Home/Library/Library';

const Libraries = ({ onRequest, isLoading, library }) => {
  return (
    <div>
      <Library onRequest={onRequest} isLoading={isLoading} library={library} />
      <Route path={`/libraries/${library.id}`}>
        <LibraryDetail
          onRequest={onRequest}
          isLoading={isLoading}
          library={library.querySnapshot.docs}
        />
      </Route>
    </div>
  );
};

export default Libraries;
