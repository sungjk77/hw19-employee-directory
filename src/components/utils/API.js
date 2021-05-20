import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

export default {
  search: function(CONFIG) {
    return axios.get(BASEURL + CONFIG);
  }
};
