import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Wrapper} from '../../../components/custom';
import {metaDataPage1} from '../../../constants';

interface Props {
  navigation: any;
}

export const Home = (props: Props) => {
  const {navigation} = props;
  const {data, buttonStyle, textStyle}: any = metaDataPage1;

  const longButton = ({name, page}: {name: string; page: number}) => {
    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => navigation.navigate('CreateRequest', {page})}>
        <Text style={textStyle}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return <Wrapper>{data.map((datum: any) => longButton(datum))}</Wrapper>;
};
