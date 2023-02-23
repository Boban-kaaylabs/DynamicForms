import React from 'react';
import {View, SafeAreaView} from 'react-native';

interface Props {
  children: any;
}
export const Wrapper = (props: Props) => {
  const {children} = props;

  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        {children}
      </SafeAreaView>
    </View>
  );
};
