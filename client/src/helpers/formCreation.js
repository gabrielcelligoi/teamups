import axios from "axios";
import useApplicationData from "../hooks/useApplicationData";

const createSport = (name) => {

  return axios.put(`/api/sports/${name}`, name)
    .then(res => {
      console.log(res)
    })
}