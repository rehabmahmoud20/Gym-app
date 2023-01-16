import axios from "axios";

const gymData = () => {
  return axios.create({
    baseURL: "https://staging.algym.com/api/v1/gyms",
    headers: { accept: "application/json" },
    params: {
      lat: 31.1306582,
      long: 30.1343777,
      page_size: 1000,
      search_diameter: 2808.2220265942824,
    },
  });
};
export default gymData;
