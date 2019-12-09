import React, { useContext, useState } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
// import { Context as LocationContext } from '../context/LocationContext';
// import useSaveStatus from '../hooks/useSaveStatus';
import { context as StatusContext } from '../context/StatusContext'

const StatusForm = () => {
  return (
    <>
      <Spacer />
        <Input
          value={content}
          onChangeText={setContent}
          placeholder="Write your tweet"
        />
      <Spacer>
        <Button 
          title="Tweet" 
          onPress={() => createStatus({ content })}
        />
      </Spacer>
    </>
  );
};

export default StatusForm;
