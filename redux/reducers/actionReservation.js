import {ADD_PAYMENT} from '../constants';
export const addPayment = (cartCourses, total) => {
  return {
    type: ADD_PAYMENT,
    orderInfo: {
      courses: cartCourses,
      total: total,
    },
  };
};


