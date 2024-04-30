import Button1 from "./Button1";
import bs1_Img from "../assets/bs-1.jpeg";

export default function BookingSection() {
  return (
    <div className="relative w-full md:h-[592px] h-[514px]">
      <div className="h-full overflow-hidden flex items-center w-full">
        <img
          className="w-full custom-md-0:h-auto h-full md:scale-x-[1] scale-x-[-1]"
          src={bs1_Img}
        />
      </div>
      <div className="absolute h-full top-0 w-full gradient-plain"></div>
      <div className="absolute flex flex-col h-full top-0 items-center justify-center w-full text-center gap-[48px] custom-md-2:px-[290px] md:px-[140px] px-[58px]">
        <p
          className="text-[#FFF7E2] custom-md-2:text-[64px] md:text-[48px] text-[32px]"
          style={{
            textShadow: "0px 4px 10.6px rgba(0, 0, 0, 0.31)",
          }}
        >
          Ready to restore harmony in your mind, body and spirit?
        </p>
        <div
          className="rounded-[16px]"
          style={{ boxShadow: "0px 4px 20.8px 0px #0000002b" }}
        >
          <Button1 text={"Book a consultation"} />
        </div>
      </div>
    </div>
  );
}
