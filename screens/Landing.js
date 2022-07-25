import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
// import text if data empty 
import EmptyMsg from '../components/EmptyMsg';
import { useSelector, useDispatch } from 'react-redux';
import CoursesItem from '../components/ReservationsItem';
// import de addToCart 
import { addToCart } from '../redux/reducers/actionAddToCart';
const Landing = ({navigation}) => {
    // hook dispach pour l'ajout de ours 
    const dispach = useDispatch(); 
    const handleAddToCart =(course) =>{
      dispach(addToCart(course));
      alert("cours ajouté au panier. Merci. ")
    }
    const existingCourses= useSelector(state=>state.courses.existingCourses); 
    // une fois selectionné les cours 
    const coursesToDisplay= existingCourses.filter( course=>course.selected === false);
    // condition 
    // if(existingCourses.length){
      // but : retirer les courses selectionné en true 

    if(coursesToDisplay.length){

      return (
        <FlatList
          // data= {existingCourses}
          data= {coursesToDisplay}
          renderItem={({item})=>(
              <CoursesItem 
             
              titre={item.title}
              imagee={item.image}
            
              viewDetails={()=> navigation.navigate('Details', {
                courseId: item.id,
                title: item.title
              })}
              OnAddToCart={()=>handleAddToCart(item)}
             
  
              />
          )}
        
         />
      );
    
    }
    return (
      <EmptyMsg text= "Il n'y a pas de cours à afficher ! 😎"/>
    )
}

const styles = StyleSheet.create({})

export default Landing;
