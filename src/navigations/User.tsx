import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CreateRequest, Home} from '../container/User';

import {NavigationAnime} from '../utils';

const Stack = createNativeStackNavigator();

export const User = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        // ...NavigationAnime,
      }}>
      {/* TABS */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateRequest" component={CreateRequest} />
    </Stack.Navigator>
  );
};
