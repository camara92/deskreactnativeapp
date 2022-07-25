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
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import AuthScreen from "./screens/AuthScreen";
// import OfficeScreen from "./screens/OfficeScreen";
// import HomeScreen from "./screens/HomeScreen";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Cart from '../screens/Cart';
import CourseInfo from '../screens/CourseInfo';
import Landing from '../screens/Landing';
import globalStyles from '../styles/globalStyles';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Reservations from '../screens/Reservations';
// import de headerIcon
import CustomHeaderIcon from '../components/CustomHeaderIcon';
import AuthUser from '../screens/Authentification/Auth';
const Stack = createNativeStackNavigator();

function AppNav({navigation}) {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        // style header

        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: globalStyles.green,
            AlignItems: 'center',
          },
          headerTitleStyle: {fontWeight: 'bold'},
          headerTintColor: globalStyles.white,
          // les icones à droit du header
          headerRight: () => (
           
            <Button
              style={styles.btnheader}
              
              title="Mes réservations"
              color="red"
            
              onPress={() => navigation.navigate('Cart')}
            />
           
        
          ),
          headerLeft: () => (
        
            <Button
              style={styles.btnheader}
              
              title="Historique"
              color="black"
        
              onPress={() => navigation.navigate('Reservations')}
            />
            
          ),
        
       
        })}>
        <Stack.Screen
          name="Landing"
          options={{title: 'Cours'}}
          component={Landing}
          options={{
            title: 'Catalogue',
          }}
        />
        <Stack.Screen name="Cart" options={{title: 'Cart'}} component={Cart} />
        <Stack.Screen
          name="Details"
          options={{title: 'Détails'}}
          component={CourseInfo}
          options={({route}) => ({
            title: route.params.title,
          })}
        />
        <Stack.Screen
          name="Reservations"
          options={{title: 'Mes réservations'}}
          component={Reservations}
        />
         <Stack.Screen
          name="Inscription"
          options={{title: 'Inscription'}}
          component={AuthUser}
        />
         <Stack.Screen
          name="AppNav"
          options={{title: 'AppNav'}}
          component={AuthUser}
        />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

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
  btnheader: {
    color: 'red',
  },
});

export default AppNav;
