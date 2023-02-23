import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

export const Radio = ({children}: any) => {
  const [metaData, setMetadata] = useState(children);
  const {
    containerStyle,
    title,
    data,
    contentWrapperStyle,
    rbStyle,
    selectedStyle,
    textStyle,
  } = metaData;

  const onSelect = (id: number) => {
    const afterSelected = data.map((datum: any) =>
      datum.id === id
        ? {...datum, selected: true}
        : {...datum, selected: false},
    );
    setMetadata((prev: any) => ({...prev, data: afterSelected}));
  };
  return (
    <View style={containerStyle}>
      <Text>{title}</Text>
      {data.map((i: any) => {
        const {id, name, selected} = i;
        return (
          <TouchableOpacity
            key={id}
            activeOpacity={0.8}
            onPress={() => onSelect(id)}
            style={contentWrapperStyle}>
            <View style={rbStyle}>
              {selected ? <View style={selectedStyle} /> : null}
            </View>
            <Text style={textStyle}>{name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
