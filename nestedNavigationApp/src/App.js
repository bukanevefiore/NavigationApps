/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Member from './member/Member';
import MemberUpdate from './member/MemberUpdate';
import MemberDetail from './member/MemberDetail';
import Profile from './profile/Profile';
import ProfileEdit from './profile/ProfileEdit';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Member" component={MemberStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;


function MemberStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Member" component={Member} />
      <Stack.Screen name="MemberDetail" component={MemberDetail} />
      <Stack.Screen name="MemberUpdate" component={MemberUpdate} />
    </Stack.Navigator>
  )
}


function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
    </Stack.Navigator>
  )
}
