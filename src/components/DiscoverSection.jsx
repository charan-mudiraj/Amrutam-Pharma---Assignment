import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import modelImg from "../assets/model.png";

const benefits = [
  {
    title: "Personalized Wellness",
    desc: "Get treatments made just for you based on your individual doshas ( body type)",
    iconSrc: icon1,
  },
  {
    title: "Focus on prevention",
    desc: "Stop problems even before they start.",
    iconSrc: icon2,
  },
  {
    title: "Mind-Body Connection",
    desc: "Keep your mind and body in sync for a happy life.",
    iconSrc: icon3,
  },
  {
    title: "Holistic Healing",
    desc: "Fix the root problem for long-lasting health.",
    iconSrc: icon4,
  },
  {
    title: "Natural Remedies",
    desc: "Using herbs and natural therapies for healing.",
    iconSrc: icon5,
  },
  {
    title: "Boosting immunity",
    desc: "Stay strong and healthy for life, not just for today.",
    iconSrc: icon6,
  },
];

function BenefitDiv({ data, isLeft, iconNo }) {
  const divAlign =
    (iconNo == 1 && "custom-md-1:mr-[52px] mr-0") ||
    (iconNo == 4 && "custom-md-1:ml-[52px] mr-0") ||
    "";
  function Content() {
    const textAlign = isLeft ? "md:text-right" : "md:text-left";
    return (
      <div
        className={
          textAlign +
          " " +
          "md:order-0 order-1 text-center flex flex-col gap-[8px]"
        }
      >
        <p className="font-bold md:text-[20px] text-[15px]">{data.title}</p>
        <p className="md:text-[16px] text-[13px] text-[#515151]">{data.desc}</p>
      </div>
    );
  }

  return (
    <div
      className={
        "flex md:flex-row flex-col gap-[16px] items-center md:max-w-[70%] max-w-[100%] custom-md-1:border-0 border-[1px] border-[#E4E4E4] rounded-xl custom-md-1:p-0 py-[17px] px-[9px] h-fit custom-md-1:w-fit w-[47%]" +
        " " +
        divAlign
      }
    >
      {isLeft && <Content />}
      <img
        src={data.iconSrc}
        className="md:h-[96px] h-[60px] md:order-1 order-0"
      />
      {!isLeft && <Content />}
    </div>
  );
}

export default function DiscoverSection() {
  return (
    <div className="md:pt-[62px] pt-[70px] md:pb-[102px] pb-[62px]">
      <div className="flex items-center flex-col md:px-[19%] px-[30px] gap-[14px]">
        <div className="relative w-full flex flex-col items-center">
          <p className="text-secondary md:text-[48px] text-[32px] font-bold z-20 text-center custom-md-1:whitespace-nowrap whitespace-normal">
            {"Discover Ayurveda’s Magic With Us"}
          </p>
          <div className="bg-[#C3D0C4] h-[5px] w-[850px] absolute bottom-[10px] custom-md-1:block hidden"></div>
        </div>
        <p className="w-[85%] text-center md:text-[20px] text-[14px] text-[#666666]">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.
        </p>
      </div>

      <div className="flex items-center justify-center pt-[41px] custom-md-1:flex-row flex-col">
        <div className="custom-md-1:flex hidden flex-col gap-10 items-end w-[50%]">
          {benefits.map((b, i) => {
            if (i < benefits.length / 2) {
              return <BenefitDiv data={b} key={i} isLeft={true} iconNo={i} />;
            }
          })}
        </div>
        <div className="md:w-[500px] w-[220px] md:pb-0 pb-[16px]">
          <img src={modelImg} className="w-full" />
        </div>
        <div className="custom-md-1:flex hidden flex-col gap-10 items-start w-[50%]">
          {benefits.map((b, i) => {
            if (i >= benefits.length / 2) {
              return <BenefitDiv data={b} key={i} isLeft={false} iconNo={i} />;
            }
          })}
        </div>
        <div className="flex md:justify-center">
          <div className="custom-md-1:hidden flex flex-wrap gap-[20px] px-[16px] justify-center">
            {benefits.map((b, i) => (
              <BenefitDiv data={b} key={i} iconNo={i} isLeft={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
