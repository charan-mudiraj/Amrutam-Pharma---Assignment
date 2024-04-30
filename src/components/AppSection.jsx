import phoneImg from "../assets/phone.png";
import as1_Img from "../assets/as-1.png";
import as2_Img from "../assets/as-2.png";
import as3_Img from "../assets/as-3.png";

export default function AppSection() {
  return (
    <div className="flex custom-md-4:pt-[65px] custom-md-1:pt-[58px] pt-[54px] custom-md-4:pb-[77px] custom-md-1:pb-[88px] pb-[99px] custom-md-4:pl-[146px] custom-md-1:pl-[75px] pl-[31px] bg-primary relative custom-md-1:text-start text-center">
      <div className="flex flex-col justify-center gap-[24px] min-h-[565px] lg:pr-[734px] custom-md-1:pr-[534px] pr-[31px]">
        <div className="flex flex-col gap-[16px]">
          <p className="lg:text-[48px] md:text-[38px] text-[32px] text-secondary font-semibold">
            Amrutam Home App
          </p>
          <p className="md:text-[16px] text-[14px] font-thin">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
        </div>
        <div className="custom-md-1:hidden block">
          <img src={as1_Img} />
        </div>
        <div className="flex flex-col gap-[33px] justify-center custom-md-1:items-start items-center">
          <p className="lg:text-[32px] md:text-[25px] text-[20px] font-semibold">
            Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across
            The Globe
          </p>
          <p className="lg:text-[36px] md:text-[30px] text-[36px] font-bold pt-[32px]">
            Get The App Now
          </p>
          <div className="flex custom-md-1:gap-[17px] gap-[27px] md:flex-row flex-col">
            <img className="w-[270px]" src={as2_Img} />
            <img className="w-[270px]" src={as3_Img} />
          </div>
        </div>
      </div>
      <div className="lg:h-[565px] lg:w-[734px] h-[395px] w-[534px] absolute lg:right-[50px] right-[25px] custom-md-1:block hidden">
        <div className="relative">
          <div className="lg:w-[258px] w-[180px] lg:h-[258px] h-[180px] bg-secondary bg-opacity-[16%] rounded-full absolute lg:top-[33px] top-[23px] lg:left-[144px] left-[100px]"></div>
          <div className="lg:w-[258px] w-[180px] lg:h-[258px] h-[180px] bg-secondary bg-opacity-[16%] rounded-full absolute lg:top-[291px] top-[191px] lg:left-[401px] left-[281px]"></div>
        </div>
        <img className="absolute" src={as1_Img} />
      </div>
    </div>
  );
}

// absolute custom-md-1:right-[25px] right-0 md:block hidden
