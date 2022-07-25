import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import de removecartcourse
import {removeCourseCart} from '../redux/reducers/actionRemoveCourseCart';
// affichage des courses ajoutés
import EmptyMsg from '../components/EmptyMsg';
import CoursesInCart from '../components/CoursesInCart';
import globalStyles from '../styles/globalStyles';
import {addPayment} from '../redux/reducers/actionReservation';
const Cart = () => {
  // usedispatch de redux
  const dispatch = useDispatch();
  const cartCourses = useSelector(state => state.cart.cartCourses);
  const total = useSelector(state => state.cart.total);
  const handlepayment = (cartCourses, total) => {
    dispatch(addPayment(cartCourses, total));
    alert('payement effectué');
  };
  console.log(cartCourses);
  console.log(total);
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
            
            <TouchableOpacity
           
              onPress={() => handlepayment(cartCourses, total)}>
              <View style={styles.btnAddPaymentText}>
                <Text style={styles.btnAddPayment}>Réserver</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <EmptyMsg text="Pas de réservation" />
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
