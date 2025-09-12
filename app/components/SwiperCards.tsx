"use client";
import Image from "next/image";
import React, {useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import "swiper/css";

const SwiperCards = ({
  items,
  paginationImages,
  className,
  slidesPerView,
}: {
  items: any[];
  paginationImages?: boolean;
  className?: string;
  slidesPerView?: number;
}) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 3.7));
    }, 110);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!swiper) return;
    const handleSlideChange = () => setProgress(0);
    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className="relative h-full gap-3 w-full flex flex-col">
      <Swiper
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={slidesPerView || 1}
        className={` w-full relative ${className || " h-96"}`}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {items.map(({ card }, i) => (
          <SwiperSlide key={i}>{card}</SwiperSlide>
        ))}
      </Swiper>
      <div className=" hidden md:flex items-center gap-4">
        {paginationImages &&
          items.map(({ src }, i) => (
            <div
              onClick={() => {
                swiper?.slideTo(i);
                swiper?.autoplay.stop();
              }}
              key={i}
              className={`${
                swiper?.realIndex === i && " shadow-md  -translate-y-3 border-rose-500 border opacity-90"
              } cursor-pointer hover:-translate-y-3 z-10  hover:shadow-md hover:opacity-90 duration-200 rounded-xl overflow-hidden max-w-lg w-full h-32 lg:h-40 relative`}
            >
              {swiper?.realIndex === i && swiper.autoplay.running && (
                <div
                  style={{ width: `${progress}%` }}
                  className=" duration-200 opacity-50 absolute  w-0 h-full inset-0 bg-gray-600 z-10"
                ></div>
              )}
              {src && src !== "" ? <Image alt="Image-pagination" src={src} fill className="object-cover" /> : null}{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SwiperCards;