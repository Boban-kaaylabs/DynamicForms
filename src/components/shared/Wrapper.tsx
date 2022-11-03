import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {COLORS} from '../../constants';

interface Props {
  children: any;
}
export const Wrapper = (props: Props) => {
  const {children} = props;

  return (
    <View style={{flex: 1, backgroundColor: COLORS.background}}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        {children}
      </SafeAreaView>
    </View>
  );
};
