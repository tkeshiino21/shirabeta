import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubMenu from 'components/Layout/SubMenu/MenuLinks';

const Trends = ({ bookLibrary }) => {
  return (
    <Container className="vertical" height="60%">
      <Card>{bookLibrary.name}</Card>
    </Container>
  );
};

export default Trends;
