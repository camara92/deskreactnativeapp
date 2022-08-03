import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
// import icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import globalStyle from '../styles/globalStyles';
// import de la cart
import {addToCart} from '../redux/reducers/actionAddToCart';
const CourseInfo = ({navigation, route}) => {
  // usedispatch pour recuperer les infos
  const dispach = useDispatch();
  const handleAddToCart = () => {
    dispach(addToCart(SelectedCourse));
    // revenir à la page précedente :
    navigation.goBack();
    alert('FormationRéserver Merci de votre confiance. ');
  };
  // recuperer les cours selon id
  const courseId = route.params.courseId;
  // console.log(courseId);

  const SelectedCourse = useSelector(state =>
    state.courses.existingCourses.find(course => course.id === courseId),
  );

  return (
    <View>
      <ScrollView style={styles.scroll}>
        <Image
          style={styles.courseImage}
          source={{uri: SelectedCourse.image}}
        />
         <View style={styles.courseDetails}>
         <Text style={styles.courseDescription}>
         {SelectedCourse.title}
         </Text>
         </View>
        {/* <View style={styles.courseDetails}>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
            Description : {SelectedCourse.description}
          </Text>
        </View> */}
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerTop}></View>
        <View style={styles.footerBottom}>
          <TouchableOpacity onPress={() => navigation.goBack('Cart')}>
            <View style={styles.btngoBack}>
              <Text style={styles.textRetour}>Retour </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddToCart}>
            <View style={styles.btnAddToCart}>
              <Text style={styles.btntextAdd}>Réserver </Text>
            </View>
          </TouchableOpacity>

          {/* /> */}
        </View>
      </View>
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  scroll: {
    height: '80%',
  },
  courseImage: {
    width: '100%',
    height: 250,
  },
  courseDetails: {
    padding: 20,
    alignItems: 'center',
  },
  courseDescription: {
    color: globalStyle.dimGrey,
    fontSize: 17,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  footerContainer: {
    height: '20%',
    backgroundColor: globalStyle.lightGrey,
  },

  footerTop: {
    height: '40%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  coursePriceWrapper: {
    paddingRight: 40,
  },
  coursePrice: {
    fontSize: 24,
    color: globalStyle.red,
  },
  footerBottom: {
    backgroundColor: globalStyle.green,
    height: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  btnAddToCart: {
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalStyle.lightOrange,
  },
  btngoBack: {
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: 'black',
    color: 'white',
  },
  textRetour: {
    color: 'white',
    fontWeight: 'bold',
  },
  btntextAdd: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
