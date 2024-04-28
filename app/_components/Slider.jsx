"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

const Slider = () => {
  const [sliderData, setsliderData] = useState(null);
  useEffect(() => {
    getSlider();
  }, []);
  const getSlider = () => {
    axios
      .get("http://localhost:1337/api/sliders/?populate=*")
      .then((responce) => {
        console.log("sliderData", responce.data.data);
        setsliderData(responce.data.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {sliderData?.map((slider, index) => {
            {
              console.log(
                "slider thaaaaa:",
                slider.attributes.image.data[0].attributes?.url
              );
            }
            return (
              <CarouselItem key={index}>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                    slider.attributes.image.data[0].attributes?.url
                  }
                  width={1000}
                  height={300}
                  alt="slider"
                  className="w-full h-[170px] md:h-[300px] object-cover rounded-3xl"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
