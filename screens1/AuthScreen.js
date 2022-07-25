import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  Button,
  placeholder,
  
  Alert,TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";
//import {auth } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js"
//import { auth } from '../firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { firebaseConfig } from "../Firebase/firebase-config";
import { initializeApp } from "@firebase/app";
// Écoute de l'état d'authentification
// import auth from '@react-native-firebase/auth';
// fin de l'écoute de l'authentification 

function AuthScreen ({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignUp = () => {
    // auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(user);
        const user = userCredentials.user;
        console.log(user.email);
       
      })
      .catch((error) => {
        alert("Merci de vous inscrire. ")
        // alert(error.message)
      
      });
  };
  // login : page de connexion if user auth 
  const messageBienvenue = "Bienvenue";
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {

        const user = userCredentials.user;
         hanlePressAfterSign(user.email);
      })
      .catch((error) => {
        alert("Veiller vérifier vos identifiants de connexion. Merci de vous inscrire si ce n'est pas encore fait. 💻")
        // console.log(error);
      });
  };
  // redirect to page profile for example
  const hanlePressAfterSign = (userEmail) => {
    console.log("signIn")
       navigation.navigate("Office", {email: userEmail});
   
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    
      <View style={styles.inputContainer}>
        <TextInput
         
          required
          placeholder="Email : myemail@email.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password : ***********"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          title="Connection"
        onPress={handleSignIn}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Se connecter </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText} 
          
          >
            S'inscrire
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#708090",
    marginTop:50,
    
  },
  inputContainer: {
    width: "95%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
   
    marginTop: 5,
    borderColor: "0782F9",
    borderWidth: 2,
    backgroundColor: "green",
  },
  buttonOutlineText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
