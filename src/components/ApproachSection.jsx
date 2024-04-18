import Card1 from "./Card1";
import { useEffect, useRef } from "react";
import { Radio } from "./ExpertsSection";

const approaches = [
  {
    title: "Make Appointment",
    desc: "You must make an appointment in advance, to choose the service and date.",
  },
  {
    title: "Consultations",
    desc: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
  },
  {
    title: "Treatment Planning",
    desc: "The Ayurvedic practitioner creates a personalized treatment plan for you",
  },
  {
    title: "Maintenance",
    desc: "These visits allow for assessment of progress, adjustments to the treatment.",
  },
];

const cardWidth = 290 + 24;
const nonWindowWidth = 104 * 2;
export default function ApproachSection() {
  return (
    <div className="flex flex-col md:pt-[95px] pt-[62px] md:pb-[106px] pb-[77px] items-center overflow-hidden">
      <div className="flex items-center flex-col md:px-[104px] px-[30px] gap-[14px]">
        <div className="relative w-full flex flex-col items-center">
          <p className="text-secondary md:text-[48px] text-[32px] font-bold z-20 text-center custom-md-1:whitespace-nowrap whitespace-normal">
            {"Our Ayurvedic Approach"}
          </p>
          <div className="bg-[#C3D0C4] h-[6px] w-[593px] absolute bottom-[9px] custom-md-1:block hidden"></div>
        </div>
        <p className="w-[85%] text-center md:text-[20px] text-[16px] text-[#666666]">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>
      <div className="md:h-full h-[355px] md:mt-[79px] mt-[47px] md:w-fit w-screen relative md:overflow-hidden overflow-x-auto scrollbar-disable">
        <div className="flex md:gap-[24px] py-[20px] gap-[16px] md:px-[104px] pr-[21px] overflow-hidden md:flex-wrap md:static absolute left-[21px] md:justify-center duration-700">
          {approaches.map((a, i) => (
            <Card1 className="bg-primary flex flex-col gap-[24px] items-center text-center py-[29px] px-[20px] h-[311px] w-[290px]">
              <div className="absolute bg-secondary bg-opacity-70 border-[1px] border-secondary rounded-full h-[90px] w-[90px]">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-white text-[48px]">{i + 1}</p>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] relative top-[100px]">
                <p className="text-secondary font-semibold text-[24px]">
                  {a.title}
                </p>
                <p className="text-[20px]">{a.desc}</p>
              </div>
            </Card1>
          ))}
        </div>
      </div>
      <div className="mt-[62px] flex gap-[30px] md:hidden">
        <Radio bgColor={"#3A643B"} />
        <Radio bgColor={"#C3C3C3"} />
        <Radio bgColor={"#C3C3C3"} />
      </div>
    </div>
  );
}
