import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';

export const Input = ({children}: any) => {
  const [metaData, setMetadata] = useState(children);

  const onChange = (value: string) => {
    setMetadata((prev: any) => ({...prev, value}));
  };

  return (
    <TextInput
      {...metaData.properties}
      value={metaData.value}
      onChangeText={onChange}
    />
  );
};
