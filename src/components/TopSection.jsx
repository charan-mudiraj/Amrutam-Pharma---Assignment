import NavBar from "./NavBar";
import Button1 from "./Button1";
import fIcon1 from "../assets/top-icon1.png";
import fIcon2 from "../assets/top-icon2.png";
import fIcon3 from "../assets/top-icon3.png";
import fIcon4 from "../assets/top-icon4.png";
import ts1_Img from "../assets/ts-1.jpeg";
import ts2_Img from "../assets/ts-2.jpeg";

function Banner() {
  return (
    <div className="flex border-[1px] relative  bg-[#FFF7E2] border-transparent">
      <div className="absolute z-30 left-[13px] right-[13px] md:left-[100px] md:right-0 md:w-[60%] flex md:items-center items-start h-full md:top-0 top-[96px]">
        <div className="flex flex-col md:gap-[48px] gap-[40px] md:p-0 pl-[8px] pr-[9px]">
          <div className="flex flex-col gap-4 md:p-0 pr-[28px]">
            <p className="md:text-[28px] text-[16px] font-thin text-[#FFF7E2]">
              Namaste, Welcome to Amrutam
            </p>
            <p className="font-bold custom-md-1:text-[48px] md:text-[35px] text-[24px] text-[#FFFFFF]">
              Step into Holistic Healing with <u>Ayurveda</u> Book Consultation
              With Certified Experts.
            </p>
            <p className="md:text-[20px] text-[14px] font-thin text-[#C9C9C9] md:w-[85%]">
              Dive into the world of ayurveda and experience personalized health
              solutions and holistic guidance from trusted ayurvedic doctors
              anytime, anywhere.
            </p>
          </div>
          <Button1 text={"BOOK AN APPOINTMENT"} />
        </div>
      </div>
      <div className="absolute z-20 banner-gradient-left h-full w-full md:block hidden"></div>
      <div className="absolute z-20 banner-gradient-top h-full w-full md:hidden block"></div>
      <div
        className="bg-[#951D1C] h-[640px] border-[2px] z-10 border-transparent"
        style={{ width: "calc(100% - 779px)" }}
      ></div>
      <img
        className="scale-x-[-1] absolute right-0 h-[640px] w-[789px] md:block hidden"
        src={ts1_Img}
      />
      <img className="md:hidden" src={ts2_Img} />
    </div>
  );
}

function Features() {
  const features = [
    {
      desc: (
        <p>
          Convenient Online &<br />
          In-Clinic Consultations
        </p>
      ),
      iconSrc: fIcon1,
    },
    {
      desc: (
        <p>
          Safe And Effective
          <br />
          Treatment
        </p>
      ),
      iconSrc: fIcon2,
    },
    {
      desc: (
        <p>
          Experienced Ayurvedic
          <br />
          Practitioners
        </p>
      ),
      iconSrc: fIcon3,
    },
    {
      desc: (
        <>
          Personalized Treatment
          <br />
          Plans & Guidance
        </>
      ),
      iconSrc: fIcon4,
    },
  ];
  return (
    <div className="flex justify-center flex-wrap md:flex-row flex-col ">
      {features.map((f, i) => (
        <div className="md:border-0 border-[1px] border-[#E9E9E9] flex justify-center">
          <div
            className="md:px-[24px] md:py-[40px] py-[35px] flex gap-[10px] items-center md:w-fit w-[300px]"
            key={i}
          >
            <img src={f.iconSrc} className="h-[70px]" />
            <p className="text-[18px] text-secondary font-bold">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TopSection() {
  return (
    <div className="bg-primary">
      <NavBar />
      <Banner />
      <Features />
    </div>
  );
}
