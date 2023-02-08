import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen';
import { StatusBar } from 'expo-status-bar';

function ModalPopup({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const RootStack = createStackNavigator();

function MyTabs() {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Back" component={MainScreen} options={{ headerShown: false }} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="Create Something" component={ModalPopup} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <MyTabs />
    </NavigationContainer>
  );
}
