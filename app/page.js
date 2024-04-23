import React from "react";
import Slider from "./_components/Slider";
import GlobalAPI from "./_utils/GlobalAPI";

const page = async () => {
  const sliderList = await GlobalAPI.getSlider();
  console.log(sliderList);

  return (
    <div>
      <Slider sliderData={sliderList} />
    </div>
  );
};

export default page;
