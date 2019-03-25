// import axios from 'axios'
import { GET_SERVICE } from "./types";
import staticData from "../data/data.json";

export const getServices = () => dispatch => {
   dispatch({
      type: GET_SERVICE,
      payload: staticData.serviceObjects
   });
};
