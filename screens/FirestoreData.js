import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {db} from '../firebase/firebase-config';

import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {ProviderId, ReactNativeAsyncStorage} from 'firebase/auth';
// Notez bien : soit on utilise 'firebase/firestore/lite ou sans lite dans un seul projet : configurer au besoin fichir config de firebase

// import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {doc, setDoc, getDoc} from 'firebase/firestore/lite';
import {parse} from 'react-native-svg';

// On peut également les importer sur l'import du dessus ou inversement :
const FirestoreData = pop => {
  const [office_name, setOfficeName] = useState('');
  const [Person, setPerson] = useState('');
  const [Until, setUntil] = useState('');
  const [isReserved, setisReserved] = useState(false);
  const nomradom = Math.random(1, 9);
  const [userDoc, setUserDoc] = useState(null);
  const [nom, setName] = useState('');
  const [email, setEmail] = useState('');

  const Create = async () => {
    //const city = '';
    // const [office_name, setOfficeName] = useState('');
    setDoc(doc(db, 'Desk', 'Bureau'), {
      Name: office_name,
      IsReserved: isReserved,
      ReservedBy: Person,
      ReservedUntil: Until,
    });
  };
  // database on firestore :
  const Read = async () => {
    const officesCollections = collection(db, 'Desk');
    const OfficeSnapshot = await getDocs(officesCollections);
    // const daouda = await (await getDocs(OfficeSnapshot)).doc('Bureau 1');
    // console.log(daouda);
    const OfficeList = OfficeSnapshot.docs.map(doc => doc.data());
    console.log(OfficeList);
    console.log('Nom :' + OfficeList[1].Name);
    console.log('Ce bureau est il réservé ?  :' + OfficeList[1].IsReserved);
    console.log('Réservé par : ' + OfficeList[1].ReservedBy);
    console.log('Délai de réservation ' + OfficeList[1].ReservedUntil);
    // console.log(OfficeList.push("Daouda"))
    // console.log(OfficeSnapshot)
    //console.log(officesCollections);
  };
  // lecture
  const Reading = () => {
    const myDoc = doc(db, 'Desk', 'Bureaux');
    getDoc(myDoc)
      .then(snapshot => {
        if (snapshot.exists) {
          setUserDoc(snapshot.data());
        } else {
          alert('Aucun document ! ');
        }
      })
      .catch(error => {
        alert(error.message);
      });
      // myDoc.forEach((ell)=>{
      //   console.log(ell)
      // })
  };
 const myArray = [10, 20, 30, 40, 50]

  myArray.forEach((el)=>{
      console.log(el)
  })
  return (
    <ScrollView>
      <View>
      {/* <Text>
        {myDoc}
      </Text> */}
        {/* <Text>
          {'\n'+myArray +'\n'}

        </Text> */}
      </View>
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
              title="Create"
              onPress={Create}
              onChangeText={text => setOfficeName(text)}
            />
          </View>
          <View style={styles.btnData}>
            <Button style={styles.btn} title="Read" onPress={Read} />

            <View style={styles.Read}>
            <Text style={styles.TextInput}>Methode 2</Text>
            <Button title="Lire une data " onPress={Reading} />
              {userDoc != null && <Text> - Nom de bureau : {userDoc.Name} </Text>}
              {userDoc != null && (
                <Text> - Réservée ? : {userDoc.IsReserved} </Text>
              )}
              {userDoc != null && <Text> - Par : {userDoc.ReservedBy} </Text>}
              {userDoc != null && (
                <Text> - Durée : {userDoc.ReservedUntil} </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48d1cc',
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
  Read: {
    marginTop: 12,
    backgroundColor: 'white',
    paddingTop: 11,
    marginBottom: 11,
    
  },
});

export default FirestoreData;
