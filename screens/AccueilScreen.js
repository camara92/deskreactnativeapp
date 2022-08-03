import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  Dimensions, animated, 
  StatusBar,
  
} from 'react-native';
import React, {useState} from 'react';
import FirestoreAuth from '../screens/Auth';


const Accueil = ({navigation}) => {
  // mettre en sorte de caroussel :

  const [isSignedIn, setisSignedIn] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={{
          uri: 'https://media.istockphoto.com/photos/contemporary-loft-office-picture-id1218042968?k=20&m=1218042968&s=612x612&w=0&h=VBbgOw-43fNrMMI5nBcMWx49R6y-KJ303CsZWDgOLSg=',
        }}>
        <Text style={styles.textwelcome}></Text>
        <View style={styles.btnRedirect}>
          <View style={styles.btnAuth}>
            <Button
              title="S'inscrire"
              onPress={() => navigation.navigate('FirestoreAuth')}
              color="red" 
            />
          </View>
          <View style={styles.btnAuth}>
            <Button
              title="Se connecter"
              onPress={() => navigation.navigate('FirestoreAuth')}
              color="green"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Accueil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackground: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    height: '100%',
  },
  textwelcome: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'lightsalmon',
    textAlign: 'center',
    fontSize: 45,
  },
  btn: {
    marginTop: 50,
    
  },
  btnRedirect: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '100%',
    padding:25
  },
  btnAuth: {
    // width:"60%",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 4,
    marginTop: 25,
    width: '100%',
    
  },
  // pour le carousel 
  screen: {
    flex: 1,
  },
  item: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    
  },
  itemOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  image: {
    resizeMode: 'cover',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 60,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },

});
