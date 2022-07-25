import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import moment from "moment";

function HomeScreen({  route, navigation }) {
    // const { email } = route.params;
    // date 
     // date à l'affiche
     const [email, SetEmail] = useState(''); 
     const [currentDate, SetCurrentDate]= useState(''); 
     useEffect(()=>{
       const today = Date();
     const date = moment(today).format("DD/MM/YYYY");
       SetCurrentDate(
         date
       )
       if (route != null) {
        console.log(route.params);
        SetEmail(route.params);
       }
      }, [])
    return (
      <View style={styles.container}>
        <Text> {currentDate} </Text>
        <Text>Bienvenue dans votre espace : Atlas du Dev !  </Text>
        <Text></Text>
        <Button
          title="Authentification"
          onPress={() => navigation.navigate("Auth")}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#e6e6fa",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Inter_900Black",
      // margin: 25,
      marginBottom:15, 
    },
    text: {
      fontWeight: "bold",
    },
    boutonnav: {
      backgroundColor: "light",
      textAlign: "center",
      margin: 25,
      width: "90%", 
      padding:18, 
      marginBottom:15, 
      
  
    },
    messageWelcole: {
      textAlign: "center",
      marginTop: 40,
      margin: 25,
    },
    Navigator: {
      marginBottom:15,
    },
  });

export default HomeScreen;