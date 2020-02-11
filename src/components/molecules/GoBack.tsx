import React from 'react';
import { Button } from 'components/atoms';
import { useHistory } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

const GoBack: React.FC = () => {
  const history = useHistory();

  return (
    <Button onClick={() => history.push('/')} className="text xlarge">
      <MdKeyboardBackspace style={{ fontSize: '30px' }} />
    </Button>
  );
};

export default GoBack;
