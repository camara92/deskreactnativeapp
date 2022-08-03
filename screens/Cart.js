import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import de removecartcourse
import {removeCourseCart} from '../redux/reducers/actionRemoveCourseCart';
// affichage des courses ajoutés
import EmptyMsg from '../components/EmptyMsg';
import CoursesInCart from '../components/CoursesInCart';
import globalStyles from '../styles/globalStyles';
import {addPayment} from '../redux/reducers/actionReservation';
import FirestoreAuth from './Auth';
import {db} from '../firebase/firebase-config';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {ReactNativeAsyncStorage, signInWithEmailAndPassword} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore/lite';

const Cart = (userEmail) => {
  // usedispatch de redux
  const dispatch = useDispatch();
  const cartCourses = useSelector(state => state.cart.cartCourses);
  const total = useSelector(state => state.cart.total);

  // methode de reservation ou enregistrement d'une réservation avec firestore
  const [office_name, setOfficeName] = useState('Bureau 1');
  const [Lastname, setLastname] = useState('CAMARA');
  const [ReservedUntil, setUntil] = useState('9h00');
  const [Firstname, setFirstname] = useState('Daouda');
  const [isReserved, setisReserved] = useState('Yes');
  const [email, setEmail] = useState(email);

  const SetData = async () => {
    setDoc(doc(db, 'Desk', 'Réservation 2'), {
      Name: office_name,
      Firstname: Firstname,
      ReservedBy: Lastname,
      ReservedUntil: ReservedUntil,
      Email: user.email,
      IsReserved: isReserved,
    });
  };
  // création de la réservation en collection firestore : 
  const Create = (Name, IsReserved,ReservedBy, ReservedUntil) => {
    
    // creat new doc in firestore
    const myDoc = doc(db, 'Desk', 'Example 5');
    const docData = {
      Name: 'CAMARA Soouleymane Daouda',
      IsReserved: 'yes',
      ReservedBy: "CAMARA Daouda Dev",
      ReservedUntil:"9h00-10h00", 
      Email: user.email
    };
    setDoc(myDoc, docData)
      .then(() => {
        alert('success');
      })
      .catch(error => {
        alert(error.message);

      });
  };

  const handlepayment = async (cartCourses, total) => {
    dispatch(addPayment(cartCourses, total));
  
  
    alert('Réservation effectué');
  };
  //console.log(cartCourses);
  //console.log(total);
  return (
    <View style={styles.cartContainer}>
      {cartCourses.length > 0 ? (
        <View>
          <FlatList
            data={cartCourses}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CoursesInCart
                title={item.title}
                // onDelete={() => alert('effacer le course ')}
                onDelete={() => dispatch(removeCourseCart(item.id))}
                // removeCourseCart
              />
            )}
          />
          <View style={styles.totalContainer}>
            <TouchableOpacity onPress={() => handlepayment(cartCourses, total)}
            
            >
              <View style={styles.btnAddPaymentText}>
                <Text style={styles.btnAddPayment}>Réserver</Text>
              </View>
            </TouchableOpacity>
            {/* collection comme historique de réservation : */}
            {/* <TouchableOpacity onPress={()=>message()}>
              <View style={styles.btnAddPaymentText}>
                <Text style={styles.btnAddPayment}>Créer une collection</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
      ) : (
        <EmptyMsg text="Pas de réservation à confirmer " />
        
      )}
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  cartContainer: {
    margin: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 19,
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  totalPrice: {
    color: globalStyles.green,
  },
  btnAddPayment: {
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
    color: globalStyles.white,
    fontSize: 20,
  },
});
