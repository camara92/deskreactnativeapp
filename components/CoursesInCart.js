import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles';
// si icon import des icons 



const CoursesInCart = (props) => {
  return (
    <View style={styles.cousesContainer}>
      <Text numberOfLines={1} style={styles.titre}> {props.title } </Text>
      
      <TouchableOpacity
       
        onPress={props.onDelete}
      
      >
     
        <View style={styles.btnDeleteToCart}>
        <Image
              
              style={{
                width: 30,
                height: 35,
                resizeMode: 'contain',
                borderRadius:25 }}
              source={{
                uri: 'https://icons.veryicon.com/png/o/business/simple-linear-icon-icon/delete-332.png',
              }}
            />
                        {/* <Text style={styles.btntextDeleteToCart}>supprimer </Text> */}
        </View>

      </TouchableOpacity>
    </View>
  )
}

export default CoursesInCart

const styles = StyleSheet.create({
    cousesContainer:{
        backgroundColor :globalStyles.white,
        borderRadius:10,
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center",
        padding:10, 
        marginBottom:9

        },
        titre:{
            width:"50%", 
            // backgroundColor:"red"

        },
        coursePrice:{
            textAlign: "right", 
            paddingRight: 9,
            width:"30%",
            
            // backgroundColor:"blue"

        }, 
        
})