import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Wrapper} from '../../../components/shared';

interface Props {
  navigation: any;
}
export const Home = (props: Props) => {
  const {navigation} = props;

  return (
    <Wrapper>
      <TouchableOpacity onPress={() => navigation.navigate('CreateRequest')}>
        <Text>Next page</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};
