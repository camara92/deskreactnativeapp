import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "./screens/AuthScreen";
import OfficeScreen from "./screens/OfficeScreen";
import HomeScreen from "./screens/HomeScreen";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

 

const Stack = createNativeStackNavigator();

function App() {

  return (

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
       
          name="Home"
          options={{ title: "Accueil" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Office"
          options={{ title: "Office" }}
          component={OfficeScreen}
        />
        <Stack.Screen
          name="Auth"
          options={{ title: "Authentification" }}
          component={AuthScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
