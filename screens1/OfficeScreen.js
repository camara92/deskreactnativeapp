import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppOffice from '../Office/Office.js'
// imort pour la lecture unique 

function OfficeScreen ({route, navigation}) {

  const {email} = route.params;
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* possibilité de naviguer vers d'autre écrans ou d'un écran à un autre  */}
    {/* liste des bureaux  */}
    <Text>Bienvenue {email}</Text>
    <AppOffice email={email} />
    
    </View>
  )
}

export default OfficeScreen

const styles = StyleSheet.create({})