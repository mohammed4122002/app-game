import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import MotionItem from "../defaults/MotionItem";

const CardInfo = ({
  desc,
  title,
  image,
  textBtn,
  btnClasses,
}: {
  desc: string;
  title: string;
  image: string;
  textBtn?: string;
  btnClasses?: string;
}) => {
  console.log(desc);
  return (
    <MotionItem
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className=" flex flex-col items-start absolute left-4 right-4 top-6 sm:left-10 sm:right-auto sm:top-14 md:left-16 md:top-16 max-w-md"
    >
      <div className=" w-56 h-24 sm:w-72 sm:h-28 md:w-80 md:h-32 lg:w-96 lg:h-40 relative">
        <Image src={image} fill alt={`${title}`} className=" object-contain" />
      </div>
      <div className="mt-2 bg-black/35 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
        <h1 className=" text-white text-lg sm:text-xl md:text-2xl font-semibold ">{title}</h1>
        <p className=" text-sm sm:text-base text-gray-200 max-w-lg">{desc}</p>
        <Button className={`rounded-full mt-3 sm:mt-5 ${btnClasses || " text-gray-50"}`}>{textBtn || "Find out more !"}</Button>
      </div>
    </MotionItem>
  );
};

export default CardInfo;