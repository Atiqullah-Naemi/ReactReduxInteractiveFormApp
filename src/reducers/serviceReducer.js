import { GET_SERVICE } from "../actions/types";

const initialState = {
   services: [],
   loading: false
};

export default function(state = initialState, action) {
   switch (action.type) {
      case GET_SERVICE:
         return {
            ...state,
            services: action.payload,
            loading: false
         };
      default:
         return state;
   }
}
