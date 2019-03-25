// import axios from 'axios'
import { GET_SOURCE } from "./types";
import staticData from "../data/data.json";

export const getSources = () => dispatch => {
   dispatch({
      type: GET_SOURCE,
      payload: staticData.accessLists
   });
};
