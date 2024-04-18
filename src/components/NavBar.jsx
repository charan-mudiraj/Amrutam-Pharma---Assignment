import Button1 from "./Button1";
import Button2 from "./Button2";
import brandImg from "../assets/brand.png";
import optionIcon from "../assets/options.png";

export default function NavBar() {
  const tabClickHandle = (e) => {
    e.target.style.color = "#3A643B";
  };
  return (
    <div className="md:h-[80px] h-[104px] flex items-center w-full relative md:justify-between md:pl-[104px] pl-[19px]">
      <div className="md:hidden block">
        <img src={optionIcon} className="h-[20px] w-[40px]" />
      </div>
      <div className="flex md:w-fit w-full">
        <div className="h-full md:w-fit w-full flex justify-center">
          <img src={brandImg} className="md:w-[259px] w-[222px]" />
        </div>
        <div className="text-[#474747] text-[20px] font-bold md:flex hidden gap-[40px] md:ml-[80px]">
          <button onClick={tabClickHandle}>Home</button>
          <button onClick={tabClickHandle}>Find Doctors</button>
          <button onClick={tabClickHandle}>About Us</button>
        </div>
      </div>
    </div>
  );
}
