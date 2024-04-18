import { useEffect } from "react";
import { StarVector } from "./StoriesSection";
import { cropPhoto } from "./functions";
import { useState } from "react";
import capIcon from "../assets/cap.png";
import pinIcon from "../assets/pin.png";

export default function Card3({ data }) {
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    cropPhoto(data.imgUrl).then((img) => {
      setAvatar(img);
    });
  }, []);
  return (
    <div className="bg-primary rounded-[40px] h-[446px] w-[295px] relative flex flex-col items-center pt-[43px] px-[24px] flex-shrink-0">
      <div className="relative flex justify-center">
        <div className="flex overflow-hidden items-center justify-center rounded-full">
          <img src={avatar} className="rounded-full h-[150px]" />
        </div>
        <div className="absolute bottom-[-5px] flex gap-[4px] gradient-rating px-[12px] py-[4px] rounded-full">
          <p className="font-semibold text-white">{data.rating}</p>
          <StarVector />
        </div>
      </div>
      <div className="flex flex-col gap-[6px] items-center mt-[24px]">
        <p className="text-[20px] font-semibold">{data.name}</p>
        <p className="text-[15px] text-[#838383]">{data.desc}</p>
        <div className="flex items-center gap-[4px]">
          <img src={capIcon} className="h-[24px]" />
          <p className="">{data.experience}</p>
        </div>
      </div>
      <div className="bg-secondary bg-opacity-[12%] py-[6px] px-[13px] rounded-full font-semibold mt-[19px] flex items-center gap-[4px]">
        <img src={pinIcon} className="h-[16px]" />
        <p className="text-secondary">{data.role}</p>
      </div>
      <button className="bg-secondary h-[65px] w-full absolute bottom-0 rounded-b-[40px] text-white text-[20px]">
        Book a session
      </button>
    </div>
  );
}
