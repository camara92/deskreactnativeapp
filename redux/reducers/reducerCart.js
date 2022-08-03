import PaieCourse from "../../data/PaidCourseModel"
import { ADD_TO_CART } from "../constants";
import { REMOVE_COURSE_CART } from "../constants";
import { ADD_PAYMENT } from "../constants";

const initialState = {
    // un array qui va contenir les cours existants  
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
        const title= course.title; 

        // instanciation de la classe : 
        const newCourse = new PaieCourse(idCourse,title,  title); 
        return {
            ...state, 
            cartCourses: state.cartCourses.concat(newCourse), 
             total: state.total+title

        }
        // case pour enlever le cours 
        case REMOVE_COURSE_CART:
            const indexResult= state.cartCourses.findIndex(course=>course.id === action.prodId);
            // recupérer via le operator 
            const newCartCoursesArray = [...state.cartCourses];
            // element qui se trouve dans le array et le retirer 
            newCartCoursesArray.splice(indexResult, 1);
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