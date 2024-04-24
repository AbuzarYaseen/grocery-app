import React from "react";
import Slider from "./_components/Slider";
import GlobalAPI from "./_utils/GlobalAPI";
import CategoryList from "./_components/CategoryList";

const page = async () => {
  const sliderList = await GlobalAPI.getSlider();
  // console.log("slider", sliderList);
  const categoryList = await GlobalAPI.getCategoryList();
  console.log("categorylist", CategoryList);
  return (
    <div className="p-10 px-12 md:px-16">
      <Slider sliderData={sliderList} />
      <CategoryList data={categoryList} />
    </div>
  );
};

export default page;
