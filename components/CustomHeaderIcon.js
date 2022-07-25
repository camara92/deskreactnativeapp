
import React from 'react'; 

import { HeaderButton } from 'react-navigation-header-buttons'; 
// import des vector icons : j'utilise font awesome 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import globalStyles from '../styles/globalStyles';
const CustomHeaderIcon = () => {
  return (
   <FontAwesome5 

    {...props} 
    iconComponent = {FontAwesome5}   
    iconSize= {24}
    color={ globalStyles.white}
   />
  )
}

export default CustomHeaderIcon

