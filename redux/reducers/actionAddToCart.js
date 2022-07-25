import { ADD_TO_CART } from "../constants";
// le cours a ajouter 
export const addToCart = (course)=>{
    return {
        type: ADD_TO_CART, 
        course: course
    }
}
