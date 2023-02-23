import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {
  Table as TableLib,
  Row,
  Rows,
  TableWrapper,
} from 'react-native-table-component';

interface Props {
  children?: any;
}
export const Table = (props: Props) => {
  const {children} = props;
  const {value, styles} = children;

  const mutatedValue = {
    head: ['', ...value?.head],
    body: value?.body?.map((t: [], i: number, v: []) => [
      value?.title?.[i],
      ...v[i],
    ]),
  };

  const tableValue = value?.title ? mutatedValue : value;
  return (
    <View style={styles.container}>
      <TableLib borderStyle={styles.border}>
        <Row
          data={tableValue.head}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={tableValue.body} textStyle={styles.text} />
      </TableLib>
    </View>
  );
};
