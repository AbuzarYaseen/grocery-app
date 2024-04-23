const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://192.168.10.13:1337/api",
});
// categories API
const getAllCategories = () => axiosClient.get("/categories?populate=*");
const getCategory = () => axiosClient.get("/categories/:id");

// sliders API
const getSlider = () =>
  axiosClient.get("/sliders?populate=*").then((res) => {
    return res.data.data;
  });
export default { getAllCategories, getCategory, getSlider };
