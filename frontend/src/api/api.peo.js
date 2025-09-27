import axios from "axios";

function loadPeople() {
  return axios.get("http://localhost:8000/database/api/v1/persona");
}

export default loadPeople;
