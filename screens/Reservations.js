import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'; 
import EmptyMsg from '../components/EmptyMsg';
import { useSelector } from 'react-redux';
import PaidItems from '../components/PaidItems';

const Reservations = () => {
    const payments = useSelector(state=>state.payments.payments);

    if(payments.length >0 ){

        return (
        <FlatList
          data= {payments}
          keyExtractor ={ item =>item.id}
          renderItem={ ({item})=>(
            <PaidItems 
                title={item.title}
                totalPrice= { item.total}
                date ={item.date}
            />
          )}
        />
        )
    }else{
        return (
            <EmptyMsg text= "Pas d'achats à afficher " />
        )
    }
}

export default Reservations

const styles = StyleSheet.create({})