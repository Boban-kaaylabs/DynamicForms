import {Dimensions} from 'react-native';

export const CURRENTDATE = new Date();
export const SCREEN = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
export const ERROR = {type: 'danger'};

export const COLORS = {
  primary: 'back',
  failure: 'red',
  success: 'green',
  white: 'white',
};

export const metaDataPage1 = {
  buttonStyle: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  data: [
    {page: 1, name: 'First Page'},
    {page: 2, name: 'Second Page'},
  ],
};

export const metaDataPage2 = [
  {
    type: 'input',
    properties: {
      label: 'Name',
      value: '',
      placeholder: 'Enter your name',
      mode: 'outlined',
      activeOutlineColor: 'green',
    },
  },
  {
    type: 'radio',
    containerStyle: {
      marginVertical: 5,
    },
    title: 'This is radio button title',
    data: [
      {id: 1, name: 'first option', selected: true},
      {id: 2, name: 'second option', selected: false},
    ],
    contentWrapperStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rbStyle: {
      height: 18,
      width: 18,
      borderRadius: 110,
      borderWidth: 1,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      marginLeft: 0,
    },
    selectedStyle: {
      width: 12,
      height: 12,
      borderRadius: 55,
      backgroundColor: 'black',
    },
    textStyle: {
      fontWeight: 'bold',
      fontSize: 15,
    },
  },
  {
    type: 'table',
    value: {
      head: ['Head', 'Head2', 'Head3', 'Head4'],
      title: ['Title', 'Title2', 'Title3', 'Title4'],
      body: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '78'],
        ['a', 'b', 'c', 'd'],
      ],
    },
    styles: {
      container: {padding: 1},
      head: {backgroundColor: '#f1f8ff'},
      text: {margin: 5},
      border: {borderWidth: 1},
    },
  },
  {
    type: 'button',
    title: 'Click me',
    styles: {
      backgroundColor: 'yellow',
      alignItems: 'center',
      alignSelf: 'center',
      padding: 5,
    },
  },
];
