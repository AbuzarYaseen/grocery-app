import React from "react";
import Slider from "./_components/Slider";
import GlobalAPI from "./_utils/GlobalAPI";

const page = async () => {
  const sliderList = await GlobalAPI.getSlider();
  console.log("slider", sliderList);
  return (
    <div className="p-10 px-16">
      <Slider sliderData={sliderList} />
    </div>
  );
};

export default page;
