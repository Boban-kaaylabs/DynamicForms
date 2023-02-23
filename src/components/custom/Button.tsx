import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Mytext} from './Mytext';

export const Button = ({children}: any) => {
  const {title, styles} = children;

  return (
    <TouchableOpacity style={styles}>
      <Mytext>{title}</Mytext>
    </TouchableOpacity>
  );
};
