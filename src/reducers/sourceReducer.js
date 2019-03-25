import { GET_SOURCE } from "../actions/types";

const initialState = {
   sources: [],
   loading: false
};

export default function(state = initialState, action) {
   switch (action.type) {
      case GET_SOURCE:
         return {
            ...state,
            sources: action.payload,
            loading: false
         };
      default:
         return state;
   }
}
