/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberSignResult from './pages/MemberResult';


const Stack = createStackNavigator();

function Routes({navigation}) {

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="MemberSignScreen" component={MemberSign} />
        <Stack.Screen name="MemberSignResultScreen" component={MemberSignResult} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;