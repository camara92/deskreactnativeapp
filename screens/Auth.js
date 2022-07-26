import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {authentification} from '../firebase/firebase-config';

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {doc, setDoc} from 'firebase/firestore/lite';
import {db} from '../firebase/firebase-config';

const FirestoreAuth = ({navigation}) => {
  const [isSignedIn, setisSignedIn] = useState(false);
  // text btnNav states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nomradom = Math.random(0, 9);

    const GetData = async () => {
      // inscription via une collection firestore des users : 
      
      const UserCollection = collection(db, 'User');
      const UserSnapshot = await getDocs(UserCollection);
      const UserList = UserSnapshot.docs.map(doc => doc.data());
      console.log(UserList);
  };
  // setUser in firestore :
  const SetData = async () => {
    setDoc(doc(db, 'User', 'user'), {
      email: Email,
      name: Password,
    });
  };
  const Register = ({navigation}) => {
    createUserWithEmailAndPassword(authentification, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  // connexion
  const SignIn = userEmail => {
    signInWithEmailAndPassword(authentification, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log('Bienvenue. Vous êtes sur la page de connexion. ');
        setisSignedIn(true);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(
          "Veiller vérifier vos identifiants de connexion. Merci de vous inscrire si ce n'est pas encore fait. 💻",
        );
      });
  };
  const SignOutUser = () => {
    signOut(authentification).then(userCredential => {
      setisSignedIn(false);
      console.log('Vous êtes déconnecté du site. Merci de votre visite. ');
      hanlePressAfterSign(user.email);
    });
  };
  const hanlePressAfterSign = userEmail => {
    console.log('signIn');
    navigation.navigate('Office', {email: userEmail});
  };
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
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
      <View style={styles.inputContainer}>
        <View style={styles.btnNav}>
          <Button title="S'inscrire" onPress={Register} />
        </View>
        {isSignedIn === true ? (
          <Button title="Déconnecter" onPress={SignOutUser} />
        ) : (
          <View style={styles.btnNav}>
            <Button
              title="Se connecter"
              onPress={SignIn}
              onPress={() => navigation.navigate('Landing')}
            />
          </View>
        )}
        <View style={styles.btnNav}>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#708090',
    // marginTop: 10,
  },
  inputContainer: {
    width: '95%',
  },
  btnNav: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
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
});

export default FirestoreAuth;
