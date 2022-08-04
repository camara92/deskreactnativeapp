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
  Button,Image, TouchableOpacity
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/Cart';
import CourseInfo from '../screens/CourseInfo';
import Landing from '../screens/Landing';
import globalStyles from '../styles/globalStyles';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Reservations from '../screens/Reservations';
import CustomHeaderIcon from '../components/CustomHeaderIcon';
import FirestoreAuth from '../screens/Auth';
import FirestoreCollAuth from '../screens/FirestoreCollAuth';
import FirestoreData from '../screens/FirestoreData';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Accueil from '../screens/AccueilScreen';
const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();
function AppNav({navigation}) {
  return (
    <NavigationContainer>
      <tab.Navigator
        // style header

        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: "midnightblue",
            
            // AlignItems: 'center',
          },
          headerTitleStyle: {fontWeight: 'bold'},
          headerTintColor: globalStyles.white,
          // les icones à droit du header
          headerRight: () => (
          
            //  <TouchableOpacity 
            //  

                
              // <Image
              
              //   style={{
              //     width: 50,
              //     height: 40,
              //     resizeMode: 'contain',
              //   }}
              //   source={{
              //     uri: 'https://cdn-icons-png.flaticon.com/512/15/15566.png?w=360',
              //   }}
              // />
              <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            >
              <View style={styles.btnAddPaymentText}>
              <Image
              
              style={{
                width: 40,
                height: 35,
                resizeMode: 'contain',
                borderRadius:25 }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728552_640.jpg',
              }}
            />

              </View>
            </TouchableOpacity>
             
           
          ),
          headerLeft: () => (
            // <Button
            //   style={styles.btnheader}
            //   title="Historique"
            //   color="black"
            //   onPress={() => navigation.navigate('Reservations')}
            // />
            <TouchableOpacity
            onPress={() => navigation.navigate('Historique')}
            >
              <View style={styles.btnAddPaymentText}>
              <Image
              
              style={{
                width: 40,
                height: 35,
                resizeMode: 'contain',
                borderRadius:50,
                marginLeft:5
              }}
              source={{
                uri: 'https://previews.123rf.com/images/valentint/valentint1610/valentint161003964/65524504-histoire-ic%C3%B4ne-bouton-internet-sur-fond-blanc-.jpg',
              }}
            />

              </View>
            </TouchableOpacity>
          ),
        })}>
            <Stack.Screen
          name="Accueil"
          options={{
            tabBarLabel: 'Connexion',
            tabBarIcon: ({color}) => (
              // <MaterialCommunityIcons name="home" color={color} size={35} />
              // <Icon name="home" size={30} color="blue" />
              <Image
                style={{
                  width: 70,
                  height: 22,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jIae1-duuKTTi1TQyvaNw1UxHtvI7An8gQ&usqp=CAU',
                }}
              />
            ),
          }}
          component={FirestoreAuth}
        />
    {/* <Stack.Screen
          name="                   Accueil"
          
          component={Accueil}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              // <MaterialCommunityIcons name="home" color={color} size={35} />
              // <Icon name="home" size={30} color="blue" />
              <Image
                style={{
                  width: 51,
                  height: 25,
                  resizeMode: 'contain',
                  
                }}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jIae1-duuKTTi1TQyvaNw1UxHtvI7An8gQ&usqp=CAU',
                }}
              />
            ),
          }}
        /> */}
        <Stack.Screen
          name="Landing"
          options={{title: 'Cours'}}
          component={Landing}
          options={{
            tabBarLabel: 'Catalogue',
            tabBarIcon: ({color}) => (
              // <MaterialCommunityIcons name="home" color={color} size={35} />
              // <Icon name="home" size={30} color="blue" />
              <Image
                style={{
                  width: 51,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/5/59/%C3%8Dcono_Computadora_-_Internet.JPG',
                }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="Cart"
          options={{
            tabBarLabel: 'Historiques',
            tabBarIcon: ({color}) => (
              // <MaterialCommunityIcons name="home" color={color} size={35} />
              // <Icon name="home" size={30} color="blue" />
              <Image
                style={{
                  width: 51,
                  height: 30,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'https://t4.ftcdn.net/jpg/03/04/12/37/360_F_304123778_IbttypTmYT9Nc4wgKeogv7RmTdUS12PA.jpg',
                }}
              />
            ),
          }}
          component={Cart}
        />
        {/* <Stack.Screen
          name="Details"
          options={{title: 'Détails'}}
          component={CourseInfo}
          // options={({route}) => ({
          //   title: route.params.title,
          // })}
        /> */}
        <Stack.Screen
          name="Historique"
          // options={{title: 'Mes réservations'}}
          options={{
            tabBarLabel: 'Booking',
            tabBarIcon: ({color}) => (
              // <MaterialCommunityIcons name="home" color={color} size={35} />
              // <Icon name="home" size={30} color="blue" />
              <Image
                style={{
                  width: 51,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/15/15566.png?w=360',
                }}
              />
            ),
          }}
          component={Reservations}
        />
        {/* screen of Firestore Data  */}
        <Stack.Screen
          name="Firestore"
          options={{
            tabBarLabel: 'Firestore',
            tabBarIcon: ({color}) => (
             
              <Image
                style={{
                  width: 51,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'https://img.icons8.com/color/480/cloud-firestore.png',
                }}
              />
            ),
          }}
          component={FirestoreData}
        />
        {/* screen of FirestoreAuth UserCollection Data  */}
        {/* <Stack.Screen
          name="DataUser"
          options={{
            tabBarLabel: 'Booking',
            tabBarIcon: ({color}) => (
              // <MaterialCommunityIcons name="home" color={color} size={35} />
              // <Icon name="home" size={30} color="blue" />
              <Image
                style={{
                  width: 51,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/15/15566.png?w=360',
                }}
              />
            ),
          }}
          component={FirestoreCollAuth}
        /> */}
      </tab.Navigator>
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
