import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';


const CoursesItem = props => {
  return (
    <TouchableHighlight
      onPress={props.viewDetails}
      underlayColor={globalStyles.green}>
      <View style={styles.courseContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: props.imagee}} style={styles.image} />
        </View>
        <View style={styles.CourseContainerDetails}>
          <Text style={styles.CourseTitle}>{props.titre}</Text>
        
        </View>
        <View style={styles.iconContainer}>
        
          <TouchableOpacity
          onPress={props.viewDetails}
          >
            <Text style={styles.iconReplaceIcons}>Voir </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.OnAddToCart}>
            <Text style={styles.iconReplaceIcons}>Ajouter </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    height: 300,
    margin: 25,
    borderColor: globalStyles.lightGrey,
    borderWidth: 1,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius:10, 
    borderTopRightRadius:10,
    overflow:"hidden", 
    
  },
  image: {
    width: '100%',
    height: '100%',
  },
  CourseContainerDetails: {
    alignItems: 'center',
    height: '20%',
    padding: 10,
  },
  CourseText: {
    fontSize: 18,
    marginVertical: 4,
    color: globalStyles.green,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  CourseTitle: {
    color: globalStyles.green,
    fontSize: 16,
    textTransform:"uppercase", 
    fontWeight:"bold"
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
  },
  iconReplaceIcons: {
    color: 'blue',
    margin: 2,
    fontWeight: 'bold',
  },
});

export default CoursesItem;
