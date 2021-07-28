/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Products from './pages/Products';
import Favorites from './pages/Favorites';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
/*
  return (
    <View>
      <Text>asdfggg</Text>
    </View>
  )
*/

  /* 
  // tab yapısı
  return(
  <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ProductsScreen" component={Products} />
        <Tab.Screen name="FavoritesScreen" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  )
  
*/
 
  // drawer yapısı
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="ProductsScreen" component={Products} />
        <Drawer.Screen name="FavoritesScreen" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  )  
  
}


export default App;