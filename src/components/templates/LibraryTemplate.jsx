import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { theme, Button, Container, Spacing, Text } from 'components/atoms';
import PostLibrary from 'containers/organisms/PostLibrary';

const Library = ({ uid }) => {
  const [tag, setTag] = useState({ tagName: '本' });
  const handleFilter = e => {
    return setTag({ tagName: e.target.value });
  };
  return <PostLibrary />;
};

export default Library;
