import { useRef, useState, useEffect } from "react";
import Card2 from "./Card2";
import { Radio } from "./ExpertsSection";

const cards = [
  {
    title: "Consulted for Skin",
    color: "#ECE7FF",
    name: "Sophie Moore",
    city: "Chennai",
    date: "17/02/24",
    stars: 5,
    quote: "One of a kind Service",
    desc: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    title: "Consulted for hair",
    color: "#ECFEE7",
    name: "Sophie Moore",
    city: "Mumbia",
    date: "17/02/24",
    stars: 2,
    quote: "One of a kind Service",
    desc: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    title: "Consulted for hair",
    color: "#ECFEE7",
    name: "Sophie Moore",
    city: "Chennai",
    date: "17/02/24",
    stars: 3,
    quote: "One of a kind Service",
    desc: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    title: "Consulted for hair",
    color: "#ECFEE7",
    name: "Sophie Moore",
    city: "Mumbia",
    date: "17/02/24",
    stars: 1,
    quote: "One of a kind Service",
    desc: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
  {
    title: "Consulted for hair",
    color: "#ECFEE7",
    name: "Sophie Moore",
    city: "Mumbia",
    date: "17/02/24",
    stars: 4,
    quote: "One of a kind Service",
    desc: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
  },
];
export function StarVector() {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3098 8.45H13.3749L10.9147 0.125L8.45449 8.45H0.519531L6.92987 13.5875L4.50433 21.875L10.9147 16.7375L17.325 21.875L14.8648 13.55L21.3098 8.45Z"
        fill="#EEDE4D"
      />
    </svg>
  );
}
const cardWidth = 388 + 32;
const nonWindowWidth = 106 * 2;
export default function StoriesSection() {
  const scrollerWindow = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (scrollerWindow.current) {
        if (window.innerWidth < 768) {
          scrollerWindow.current.style.width = "100%";
          return;
        }
        if (scrollerWindow.current.style.width == "100%") {
          scrollerWindow.current.style.width = "0px";
        }

        const width = scrollerWindow.current.offsetWidth;
        const maxCards = Math.floor(
          (window.innerWidth - nonWindowWidth) / cardWidth
        );
        const currentCards = Math.floor(width / cardWidth);
        if (
          currentCards != maxCards &&
          maxCards > 0 &&
          maxCards <= cards.length
        ) {
          scrollerWindow.current.style.width = cardWidth * maxCards + "px";
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollerWindow]);
  return (
    <div className=" bg-primary flex items-center flex-col md:pt-[77px] pt-[65px] pb-[51px] md:px-[106px] overflow-hidden">
      <div className="relative w-full flex flex-col items-center">
        <p className="text-secondary md:text-[48px] text-[32px] font-bold z-20 text-center custom-md-2:whitespace-nowrap whitespace-normal">
          {"Stories from our valued customers!"}
        </p>
        <div className="bg-[#C3D0C4] h-[8px] w-[828px] absolute bottom-[7px] custom-md-2:block hidden"></div>
      </div>
      <div
        className="md:mt-[76px] mt-[35px] md:pl-[16px] h-[391px] relative overflow-y-hidden overflow-x-auto scrollbar-disable"
        ref={scrollerWindow}
      >
        <div className="flex  md:pr-0 pr-[23px] md:gap-[32px] md:static absolute left-[23px] gap-[16px] duration-700">
          {cards.map((c, i) => (
            <Card2
              className="mt-[30px] mr-[32px] flex flex-col md:gap-[20px] gap-[30px] h-full"
              key={i}
              title={c.title}
              color={c.color}
            >
              <div className="flex gap-[13px] pl-[24px]">
                <div className="rounded-full bg-[#515151] md:h-[60px] w-[51px] md:w-[60px] h-[50px]"></div>
                <div className="text-[#414141] md:text-[20px]">
                  <p className="font-semibold">{c.name}</p>
                  <p className="font-thin">{c.city}</p>
                </div>
                <div className="">
                  <p className="md:text-[16px] text-[12px] md:pl-[51px] pl-[13px]">
                    {c.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:pl-[16px] pl-[15px]">
                <div className="flex gap-[6px] pl-[15px]">
                  {Array.from({ length: c.stars }).map((_, i) => (
                    <StarVector />
                  ))}
                </div>
                <p className="m-[8px] font-semibold text-[#333333] md:text-[22px] text-[20px] relative">
                  {`"${c.quote}"`}
                </p>
                <p className="text-[#333333] md:text-[18px]">{c.desc}</p>
              </div>
            </Card2>
          ))}
        </div>
      </div>

      <div className="md:mt-[64px] mt-[73px] flex gap-[30px]">
        <Radio bgColor={"#3A643B"} />
        <Radio bgColor={"#C3C3C3"} />
        <Radio bgColor={"#C3C3C3"} />
      </div>
    </div>
  );
}
