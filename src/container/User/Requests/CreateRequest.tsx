import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Wrapper} from '../../../components/shared';

interface Props {
  navigation: any;
}

export const CreateRequest = (props: Props) => {
  const {navigation} = props;

  return (
    <Wrapper>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};
