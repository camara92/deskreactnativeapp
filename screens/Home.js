import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import AppNav from '../routes/AppNav';
import AuthUser from './Authentification/Auth';
function Home({route, navigation}) {
  // const { email } = route.params;
  // date
  // date à l'affiche
  const [email, SetEmail] = useState('');
  const [currentDate, SetCurrentDate] = useState('');
  useEffect(() => {
    const today = Date();
    const date = moment(today).format('DD/MM/YYYY');
    SetCurrentDate(date);
    if (route != null) {
      console.log(route.params);
      SetEmail(route.params);
    }
  }, []);
  return (
    <View style={styles.container}>
          {/* <Image
        style={styles.logo}
        source={{
          uri: 'https://mycommunit.io/uploads/companies/company_1064/logo/capturedcran2021-11-0514.12.31.png'
        }}
      /> */}
      <Text> {currentDate} </Text>
      <Text>Bienvenue dans votre espace : Atlas du Dev ! </Text>
      <View style={styles.inputContainer}>
        <View style={styles.navbtn}>
          <Button
            title="Authentification"
            onPress={AppNav}
            style={styles.btnMarge}
          />
          <Button
            title="AppNav"
            onPress={AppNav}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6fa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inter_900Black',
    //marginBottom: 15,
  },
  inputContainer: {
    width: '95%',
  },
  navbtn: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
   
    
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  btnMarge:{
    margin: 10,
  }
});

export default Home;
