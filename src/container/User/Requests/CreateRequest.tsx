import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Input, Radio, Table, Wrapper} from '../../../components/custom';

import {metaDataPage2} from '../../../constants';

interface Props {
  navigation: any;
  route: any;
}

export const CreateRequest = (props: Props) => {
  const {navigation, route} = props;
  const page = route.params.page;

  const renderOptions = (obj: {type: string}) => {
    const {type} = obj;
    switch (type) {
      case 'input':
        return <Input>{obj}</Input>;
      case 'radio':
        return <Radio>{obj}</Radio>;
      case 'table':
        return <Table>{obj}</Table>;
      case 'button':
        return <Button>{obj}</Button>;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      {metaDataPage2.map(obj => renderOptions(obj))}
    </Wrapper>
  );
};
