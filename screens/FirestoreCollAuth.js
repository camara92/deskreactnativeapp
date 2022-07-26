import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {db} from '../firebase/firebase-config';

import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

// Notez bien : soit on utilise 'firebase/firestore/lite ou sans lite dans un seul projet : configurer au besoin fichir config de firebase

// import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {doc, setDoc} from 'firebase/firestore/lite';

// On peut également les importer sur l'import du dessus ou inversement :
const FirestoreCollAuth = () => {
  const [Lastname, setLastname] = useState('');
  const [Firstname, setFirstname] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState(false);
  const nomradom = Math.random(0, 9);

  // authentificatin des users via une collectin des data : firestire collection 
  const GetDataUser = async () => {
    const UserCollections = collection(db, 'User');
    const UserSnapshot = await getDocs(UserCollections);
    const UserList = UserSnapshot.docs.map(doc => doc.data());
   
    console.log(UserList);
    
  };
  // set User in firestore database : 
  const SetDataUser = async () => {
    //const city = '';
    // const [Lastname, setLastname] = useState('');
    setDoc(doc(db, 'User', 'user1'), {
      Lastname: Lastname,
      Firstname: Firstname,
      Email: Email,
      Password: Password,
      
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.user}>
        Formulaire authentification
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.TextInput}>
          <Text></Text>
          <Text style={styles.textLabel}>Prénom </Text>
          <TextInput
            placeholder="Votre prénom : Daouda "
            value={Lastname}
            onChangeText={text => setLastname(text)}
          />
          <Text style={styles.textLabel}>Nom : </Text>
          <TextInput
            placeholder="Votre : CAMARA "
            value={Firstname}
            onChangeText={text => setFirstname(text)}
          />
          <Text style={styles.textLabel}>Votre mot de passe </Text>
          <TextInput
            placeholder="Votre mot de passe "
            value={Password}
            onChangeText={text => setPassword(text)}
            secureTextEntry ={true}
          />
          <Text style={styles.textLabel}>Votre Email </Text>
          <TextInput
            placeholder="Votre email"
            value={Email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.btnData}>
          <Button
            style={styles.btn}
            title="SetDataUser"
            onPress={SetDataUser}
            onChangeText={text => setLastname(text)}
          />
        </View>
        <View style={styles.btnData}>
          <Button style={styles.btn} title="GetDataUser" onPress={GetDataUser} />

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
    backgroundColor: 'black',
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
  TextInput: {
    backgroundColor: 'white',
    paddingTop: 10,
    marginBottom: 10,
    // borderRadius: 14,
  },
  textLabel: {
    color: 'white',
    justifyContent: 'center',
    margin: 5,
    fontWeight: 'bold',
    backgroundColor:"purple",
    padding:10
    // textAlign:"center"
  },
  btnData: {
    marginBottom: 20,
  },
  btn: {
    marginBottom: 25,
    backgroundColor: 'white',
  },
  user: {
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign:"center",
    marginTop:20
  },
});

export default FirestoreCollAuth;
