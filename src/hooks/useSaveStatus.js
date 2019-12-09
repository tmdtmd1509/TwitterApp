import { useContext } from 'react';
import { Context as StatusContext } from '../context/StatusContext';
// import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';

export default () => {
  const { createStatus } = useContext(StatusContext);

  const saveStatus = async () => {
    await createStatus(alias, status);
    
    // reset();
    navigate('StatusList');
  };

  return [saveStatus];
};
