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
import { ProviderId, ReactNativeAsyncStorage } from 'firebase/auth';
// Notez bien : soit on utilise 'firebase/firestore/lite ou sans lite dans un seul projet : configurer au besoin fichir config de firebase

// import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {doc, setDoc} from 'firebase/firestore/lite';
import { parse } from 'react-native-svg';

// On peut également les importer sur l'import du dessus ou inversement :
const FirestoreData = (pop) => {
  const [office_name, setOfficeName] = useState('');
  const [Person, setPerson] = useState('');
  const [Until, setUntil] = useState('');
  const [isReserved, setisReserved] = useState(false);
 const nomradom = Math.random(1, 9);


  // database on firestore :
  const GetData = async () => {
    const officesCollections = collection(db, 'Desk');
    const OfficeSnapshot = await getDocs(officesCollections);
    // const daouda = await (await getDocs(OfficeSnapshot)).doc('Bureau 1');
    // console.log(daouda);
    const OfficeList = OfficeSnapshot.docs.map(doc => doc.data());
    console.log(OfficeList);
    console.log("Nom :" +OfficeList[1].Name);
    console.log("Ce bureau est il réservé ?  :" +OfficeList[1].IsReserved);
    console.log("Réservé par : "+ OfficeList[1].ReservedBy);
    console.log("Délai de réservation "+ OfficeList[1].ReservedUntil);
    // console.log(OfficeList.push("Daouda"))
    // console.log(OfficeSnapshot)
    //console.log(officesCollections);

    

    
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
        {/* <Text> {pop.OfficeList[1].Name} </Text> */}
       
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
    // marginTop: 11,
  },
  inputContainer: {
    width: '95%',
  },
  btnNav: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 11,
    // borderRadius: 11,
    // marginTop: 1,
  },
  buttonContainer: {
    width: '111%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
  },
  buttonText: {
    color: 'white',
    fontWeight: '711',
    fontSize: 16,
  },
  TextInput: {
    backgroundColor: 'white',
    paddingTop: 11,
    marginBottom: 11,
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
    marginBottom: 21,
  },
  btn: {
    marginBottom: 25,
    backgroundColor: 'white',
  },
  infoOffice: {
    color: 'white',
    marginBottom: 11,
    fontWeight: 'bold',
    fontSize: 31,
  },
});

export default FirestoreData;
