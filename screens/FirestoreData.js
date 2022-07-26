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
import { ReactNativeAsyncStorage } from 'firebase/auth';
// Notez bien : soit on utilise 'firebase/firestore/lite ou sans lite dans un seul projet : configurer au besoin fichir config de firebase

// import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {doc, setDoc} from 'firebase/firestore/lite';

// On peut également les importer sur l'import du dessus ou inversement :
const FirestoreData = () => {
  const [office_name, setOfficeName] = useState('');
  const [Person, setPerson] = useState('');
  const [Until, setUntil] = useState('');
  const [isReserved, setisReserved] = useState(false);
  const nomradom = Math.random(0, 9);

  // database on firestore :
  const GetData = async () => {
    const officesCollections = collection(db, 'Desk');
    const OfficeSnapshot = await getDocs(officesCollections);
    const OfficeList = OfficeSnapshot.docs.map(doc => doc.data());
   
    // lire les données :
    // const infodesk = await firestore().collection('Desk').get();
    // //console.log(infodesk);
    // const user = await firestore().collection('Desk').doc('office 1').get();
    //console.log(user)
    console.log(OfficeList);
    
  };


  //firestore().collection('Users').onSnapshot(onResult, onError);
  const SetData = async () => {
    //const city = '';
    // const [office_name, setOfficeName] = useState('');
    setDoc(doc(db, 'Desk', 'Bureau 1'), {
      Name: office_name,
      IsReserved: isReserved,
      ReservedBy: Person,
      ReservedUntil: Until,
    });
  };

  // authentificatin des users via une collectin des data : firestire collection 
  // const GetDataUser = async () => {
  //   const UserCollections = collection(db, 'User');
  //   const UserSnapshot = await getDocs(UserCollections);
  //   const UserList = UserSnapshot.docs.map(doc => doc.data());
   
  //   console.log(UserList);
    
  // };
  // // set User in firestore database : 
  // const SetUser = async () => {
  //   //const city = '';
  //   // const [office_name, setOfficeName] = useState('');
  //   setDoc(doc(db, 'User', 'user1'), {
  //     Lastname: userLastname,
  //     Firstname: userFirstname,
  //     Email: userEmail,
  //     Password: userPassword,
      
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.infoOffice}>
        Office : bureau pour la réservation des salles{' '}
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.TextInput}>
          <Text></Text>
          <Text style={styles.textLabel}>Nom de bureau </Text>
          <TextInput
            placeholder="Ajouter un nom pour votre collection "
            value={office_name}
            onChangeText={text => setOfficeName(text)}
          />
          <Text style={styles.textLabel}>Est-il réservée ? </Text>
          <TextInput
            placeholder="true or false"
            value={isReserved}
            onChangeText={text => setisReserved(text)}
          />
          <Text style={styles.textLabel}>Réservé par : </Text>
          <TextInput
            placeholder="Réserver par : Daouda "
            value={Person}
            onChangeText={text => setPerson(text)}
          />
          <Text style={styles.textLabel}>Délai </Text>
          <TextInput
            placeholder="Réservation : journée-soir-autre "
            value={Until}
            onChangeText={text => setUntil(text)}
          />
        </View>
        <View style={styles.btnData}>
          <Button
            style={styles.btn}
            title="SetData"
            onPress={SetData}
            onChangeText={text => setOfficeName(text)}
          />
        </View>
        <View style={styles.btnData}>
          <Button style={styles.btn} title="GetData" onPress={GetData} />
          {/* <Text> {office_name} </Text>
        <Text> {Person} </Text>
        <Text> {Until} </Text> */}
        </View>
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
    backgroundColor: 'green',
    // marginTop: 10,
  },
  inputContainer: {
    width: '95%',
  },
  btnNav: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    // borderRadius: 10,
    // marginTop: 1,
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
    color: 'red',
    justifyContent: 'center',
    margin: 5,
    fontWeight: 'bold',
    // textAlign:"center"
  },
  btnData: {
    marginBottom: 20,
  },
  btn: {
    marginBottom: 25,
    backgroundColor: 'white',
  },
  infoOffice: {
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default FirestoreData;
