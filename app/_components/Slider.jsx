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
              console.log("slider thaaaaa:", slider);
            }
            <CarouselItem key={index}>
              <Image
                src={
                  process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                  slider.attributes.image.data.attributes?.formats?.thumbnail
                    ?.url
                }
                width={1000}
                height={400}
                alt="slider"
                className="w-full"
              />
              this is slider
            </CarouselItem>;
          })}
          <CarouselItem>slider</CarouselItem>;
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
