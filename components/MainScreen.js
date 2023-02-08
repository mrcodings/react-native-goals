import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Music from "./Music";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Music />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={ModalScreen}
          options={({ navigation, route }) => ({
            tabBarBadge: 3,
            // headerTitle: (props) => <LogoTitle {...props} />,
            // Add a placeholder button without the `onPress` to avoid flicker
            headerRight: () => <Button title="Add" onPress={() => navigation.navigate('Create Something')} />,
          })}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default MainScreen;
