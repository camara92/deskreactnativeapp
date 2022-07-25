import PaieCourse from "../../data/PaidCourseModel"
import { ADD_TO_CART } from "../constants";
import { REMOVE_COURSE_CART } from "../constants";
import { ADD_PAYMENT } from "../constants";

const initialState = {
    // un array qui va contenir les cours existants 
    //id, price et le titre 
    //fichier dans data 
    cartCourses : [], 
    total: 0
}

const reducerCart = (state = initialState, action )=>{
    // switch case 
    switch(action.type){
        case ADD_TO_CART: 
        const course = action.course; 
        const idCourse = course.id; 
        const price =course.price; 
        const title= course.title; 

        // instanciation de la classe : 
        const newCourse = new PaieCourse(idCourse, price, title); 
        return {
            ...state, 
            cartCourses: state.cartCourses.concat(newCourse), 
            total: state.total+price

        }
        // case pour enlever le cours 
        case REMOVE_COURSE_CART:
            const indexResult= state.cartCourses.findIndex(course=>course.id === action.prodId);
            // recupérer via le operator 
            const newCartCoursesArray = [...state.cartCourses];
            // element qui se trouve dans le array et le retirer 
            newCartCoursesArray.splice(indexResult, 1);
            // on utilise l'index pour acceder à la propriété price 
            const coursePrice = state.cartCourses[indexResult].price; 
            // puis le passser pour faire la soustraction au totale 

            return {
                ...state, 
                cartCourses: newCartCoursesArray,
                total: state.total - coursePrice
            }
            // paiement 
            case ADD_PAYMENT: 
                return initialState;
        default: 
           return state; 
    }

}

export default reducerCart; 