import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { authentification } from '../firebase/firebase-config';

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {doc, setDoc} from 'firebase/firestore/lite';
import {db} from '../firebase/firebase-config';
 import {ReactNativeAsyncStorage} from 'firebase/auth';

const AuthScreen = ({navigation, props}) => {
  const [isSignedIn, setisSignedIn] = useState(false);
  // text btnNav states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nomradom = Math.random(0, 9);

  const Register = ({navigation}) => {
    createUserWithEmailAndPassword(authentification, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
      })
      .catch(error => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(
          "Veiller vérifier vos saisies d'inscription. Merci de vous inscrire si ce n'est pas encore fait. 💻",
        );
      });
  };
  // connexion
  const SignIn = userEmail => {
    signInWithEmailAndPassword(authentification, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log('Bienvenue. Vous êtes sur la page de connexion. ');
        setisSignedIn(true);
        // hanlePressAfterSign()
        hanlePressAfterSign(user.email);
        // une fois connecté on fait une redirectin vers les bureaux

        navigation.navigate('Landing');
        // ...
      })
      .catch(error => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(
          "Veiller vérifier vos identifiants de connexion. Merci de vous inscrire si ce n'est pas encore fait. 💻",
        );
      });
  };
  const SignOutUser = () => {
    signOut(authentification).then(userCredential => {
      setisSignedIn(false);
      console.log('Vous êtes déconnecté du site. Merci de votre visite. ');
    });
  };
  const hanlePressAfterSign = userEmail => {
    console.log('signIn');
    if (email == email && password == password) {
      console.log('Salut Daouda');
    }
    navigation.navigate('Landing', {email: userEmail});
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/295/295128.png',
          cache: 'only-if-cached',
        }}
        style={{width: 150, height: 150, borderRadius:100}}
      />
      <Text style={styles.TextWelcome}>Welcome</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.btnNav}
        />
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={styles.btnNav}
        />
      </View>
      <View style={styles.AuthContainer}>
        <View style={styles.btnAuth}>
          <Button title="S'inscrire" onPress={Register} />
        </View>
        {isSignedIn === true ? (
          <View style={styles.btnAuth}>
            <Button title="Déconnecter" onPress={SignOutUser} />
          </View>
        ) : (
          <View style={styles.btnAuth}>
            <Button
              title="Se connecter"
              onPress={SignIn}
              // onPress={() => navigation.navigate('Landing')}
            />
          </View>
        )}

        {/* <View style={styles.btnNav}>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  alignItems: 'center',
    backgroundColor: '#48d1cc',
    //backgroundColor: 'lightblue',
    // marginTop: 10,
  },
  inputContainer: {
    width: '95%',
  },
  btnNav: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 5,
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
  TextWelcome: {
    color: 'red',
    marginBottom: 15,
    fontSize: 50,
    textShadowColor: 'bold',
    textShadowOffset: {width: 3, height: 5},
    textShadowRadius: 25,
    textShadowColor: 'blue',
    textAlign: 'center',
    fontWeight:"bold"
  },
  btnNavData: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  AuthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '95%',
  },
  btnAuth: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 4,
    marginTop: 5,
    width: '45%',
  },
});

export default AuthScreen;
