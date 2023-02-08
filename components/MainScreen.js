import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        onPress={() => navigation.navigate('Create Something')}
        title="Open Modal"
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Group>
        <Tab.Screen name="Home" component={ModalScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default MainScreen;
