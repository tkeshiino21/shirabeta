import React from 'react';
import PostItems from 'containers/PostItems';
import SubMenu from 'Layout/SubMenu/MenuLinks';
import { Container, Spacing } from 'Shared';
import { subMenuItems } from 'components/Home/MileStones/SubMenuItems';
import {
  ResponsiveContainer,
  ResponsiveCard,
} from 'components/Home/MileStones/Style';

const MileStones = () => {
  return (
    <ResponsiveContainer height="auto">
      <SubMenu listItems={subMenuItems} />
      <Spacing mRight="-5px" />
      <Container width="100%" height="80%">
        <ResponsiveCard>
          <Container className="vertical" height="60%">
            <PostItems />
          </Container>
        </ResponsiveCard>
      </Container>
    </ResponsiveContainer>
  );
};

export default MileStones;
