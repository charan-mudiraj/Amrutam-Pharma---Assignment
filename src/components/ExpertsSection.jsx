import { useRef, useState, useEffect } from "react";
import Card3 from "./Card3";
import es1_Img from "../assets/es-1.png";

const experts = [
  {
    imgUrl: es1_Img,
    rating: "4.5",
    name: "Dr. Vaishali Sharma",
    desc: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    role: "Skin Specialist",
  },
  {
    imgUrl: es1_Img,
    rating: "5",
    name: "Dr. Vaishali Sharma",
    desc: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    role: "Skin Specialist",
  },
  {
    imgUrl: es1_Img,
    rating: "3.2",
    name: "Dr. Vaishali Sharma",
    desc: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    role: "Skin Specialist",
  },
  {
    imgUrl: es1_Img,
    rating: "4.2",
    name: "Dr. Vaishali Sharma",
    desc: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    role: "Skin Specialist",
  },
  {
    imgUrl: es1_Img,
    rating: "5",
    name: "Dr. Vaishali Sharma",
    desc: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    role: "Skin Specialist",
  },
];

export function Radio({ bgColor }) {
  return (
    <button
      className="h-[12px] w-[12px] rounded-full"
      onClick={() => {}}
      style={{ backgroundColor: bgColor }}
    ></button>
  );
}

function LeftArrow() {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.292893 7.29289C-0.0976314 7.68341 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM24 7L1 7L1 9L24 9L24 7Z"
        fill="#A5A5A5"
      />
    </svg>
  );
}
function RightArrow() {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928933C16.9526 0.538409 16.3195 0.538409 15.9289 0.928933C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM-4.57822e-08 9L23 9L23 7L4.57822e-08 7L-4.57822e-08 9Z"
        fill="#A5A5A5"
      />
    </svg>
  );
}
function RightArrow2() {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full"
    >
      <path
        d="M1 13L7 7L1 1"
        stroke="#3A643B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
const cardWidth = 295 + 48;
const nonWindowWidth = 246 + 109 * 2;
export default function ExpertsSection() {
  const scrollerWindow = useRef(null);
  const scroller = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (scrollerWindow.current) {
        if (window.innerWidth < 768) {
          if (scroller.current) {
            scroller.current.style.paddingLeft =
              (window.innerWidth - 295) / 2 + "px";
            scroller.current.style.paddingRight =
              (window.innerWidth - 295) / 2 + "px";
            scroller.current.style.gap = (window.innerWidth - 295) / 2 + "px";
          }
          scrollerWindow.current.style.width = window.innerWidth + "px";
          return;
        }
        if (scrollerWindow.current.offsetWidth == 767) {
          scrollerWindow.current.style.width = cardWidth + "px";
        }
        if (scroller.current && scroller.current.style.gap != "48px") {
          scroller.current.style.paddingLeft = "0px";
          scroller.current.style.paddingRight = "0px";
          scroller.current.style.gap = "48px";
        }
        const width = scrollerWindow.current.offsetWidth;
        const maxCards = Math.floor(
          (window.innerWidth - nonWindowWidth) / cardWidth
        );
        const currentCards = Math.floor(width / cardWidth);
        if (
          currentCards != maxCards &&
          maxCards > 0 &&
          maxCards <= experts.length
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
  const scrollLeft = () => {
    if (Math.abs(scrollWidth) > 0) {
      setScrollWidth((w) => w + cardWidth);
    }
  };
  const scrollRight = () => {
    if (Math.abs(scrollWidth) < (experts.length - 1) * cardWidth) {
      setScrollWidth((w) => w - cardWidth);
    }
  };

  return (
    <div className="flex items-center flex-col md:pt-[66px] pt-[69px] md:px-[109px] md:pb-[54px] pb-[83px] overflow-hidden">
      <div className="relative w-full flex flex-col items-center">
        <p className="text-secondary md:text-[48px] text-[32px] font-bold z-20 text-center custom-md-1:whitespace-nowrap whitespace-normal">
          {"Meet Our Ayurveda Experts"}
        </p>
        <div className="bg-[#C3D0C4] h-[8px] w-[665px] absolute bottom-[7px] custom-md-1:block hidden"></div>
      </div>
      <div className="flex items-center md:mt-[75px] mt-[46px] justify-center gap-[27px] ">
        <div className="md:block hidden">
          <button
            onClick={scrollLeft}
            className="h-[69px] w-[72px] rounded-full border-[1px] border-[#BCBCBC] flex items-center justify-center"
          >
            <LeftArrow />
          </button>
        </div>
        <div
          className="md:px-[24px] overflow-x-hidden relative h-[446px]"
          ref={scrollerWindow}
        >
          <div
            className={
              "scrollbar-disable flex md:static relative duration-700 md:gap-[48px] md:overflow-x-visible overflow-x-auto snap-mandatory snap-x"
            }
            style={{ transform: `translate(${scrollWidth}px)` }}
            id="experts-scroller"
            ref={scroller}
          >
            {experts.map((e, i) => (
              <div className="snap-center">
                <Card3 data={e} key={i} />
              </div>
            ))}
          </div>
        </div>

        <div className="md:block hidden">
          <button
            onClick={scrollRight}
            className="h-[69px] w-[72px] rounded-full border-[1px] border-[#BCBCBC] flex items-center justify-center"
          >
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="md:mt-[37px] mt-[72px] flex gap-[30px]">
        <Radio bgColor={"#3A643B"} />
        <Radio bgColor={"#C3C3C3"} />
        <Radio bgColor={"#C3C3C3"} />
      </div>
      <button className="md:flex hidden mt-[40px] gap-[14px] justify-center items-center h-[62px] w-[276px] bg-[#DBE3DC63] bg-opacity-[39%] rounded-[7px] border-[1px] border-secondary">
        <p className="text-[24px] font-semibold text-secondary pb-[6px]">
          Find more experts
        </p>
        <RightArrow2 />
      </button>
    </div>
  );
}
