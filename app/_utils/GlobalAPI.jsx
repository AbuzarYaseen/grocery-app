const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://192.168.10.13:1337/api",
});
// categories API for client side
const getAllCategories = () => axiosClient.get("/categories?populate=*");

// sliders API for server side
const getSlider = () =>
  axiosClient.get("/sliders?populate=*").then((res) => {
    return res.data.data;
  });

// category list for server side
const getCategoryList = () =>
  axiosClient.get("/categories?populate=*").then((res) => {
    return res.data.data;
  });
export default { getAllCategories, getSlider, getCategoryList };
