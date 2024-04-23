import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = ({ sliderData }) => {
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
                  className="w-full h-[250px] object-cover rounded-2xl"
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
