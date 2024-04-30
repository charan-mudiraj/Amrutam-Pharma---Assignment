import Card1 from "./Card1";
import ss1_Img from "../assets/ss-1.jpeg";
import ss2_Img from "../assets/ss-2.png";
import ss3_Img from "../assets/ss-3.jpeg";

const cards = [
  {
    isImage: false,
    title: 'स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"',
    desc: "[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]",
  },
  {
    isImage: true,
    url: ss1_Img,
  },
  {
    isImage: false,
    title: "Precise Diagnosis",
    desc: "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.",
  },
  {
    isImage: true,
    url: ss2_Img,
  },
  {
    isImage: false,
    title: "Zero side-effects",
    desc: "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs",
  },
  {
    isImage: true,
    url: ss3_Img,
  },
  {
    isImage: false,
    title: "Individual Treatment",
    desc: "all Treatments are personalized based on a person's unique constitution and health concerns.",
  },
];

export default function SpecialitySection() {
  return (
    <div className="bg-primary md:pt-[79px] pt-[61px] flex flex-col md:gap-[56px] gap-[44px] md:px-[100px] px-[16px] md:pb-[101px] pb-[38px]">
      <div className="relative w-full flex flex-col items-center">
        <p className="text-secondary md:text-[48px] text-[32px] font-bold z-20 text-center custom-md-2:whitespace-nowrap whitespace-normal">
          {"What sets Ayurvedic consultations apart?"}
        </p>
        <div className="bg-[#C3D0C4] h-[5px] w-[957px] absolute bottom-[10px] custom-md-2:block hidden"></div>
      </div>
      <div className="flex flex-wrap md:flex-row flex-col items-center md:gap-[16px] gap-[24px] justify-center">
        {cards.map((c, i) => {
          if (c.isImage) {
            return (
              <div
                className="h-[275px] overflow-hidden rounded-[20px] flex items-center"
                key={i}
              >
                <img src={c.url} className="w-[328px] h-auto" />
              </div>
            );
          }
          return (
            <Card1
              className={
                "flex flex-col gap-[19px] py-[48px] px-[24px] w-[328px] flex-grow bg-white" +
                " " +
                (i == 0 ? "md:w-[522px]" : "md:w-[298px]")
              }
              key={i}
            >
              <p className="text-secondary md:text-[32px] text-[24px] font-semibold">
                {c.title}
              </p>
              <p
                className={
                  "text-[15px] md:text-[18px]" +
                  " " +
                  (i == 0 && "text-secondary")
                }
              >
                {c.desc}
              </p>
            </Card1>
          );
        })}
      </div>
    </div>
  );
}
