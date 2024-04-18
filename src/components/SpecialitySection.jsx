import Card1 from "./Card1";

const cards = [
  {
    isImage: false,
    title: 'स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"',
    desc: "[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]",
  },
  {
    isImage: true,
    url: "https://s3-alpha-sig.figma.com/img/176b/ed5d/116ec373d4d09fe1dc2dad43869868d9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-BS59qFdwG4k4SvtMK44hzcBrLByEYnmkLeagoMhYiknUKV2cTC2EudBwtVEJPCEbibIRnFTOHNukcm-faw7tCn6uP03T59Fvt8S2DclDtsbIuFm~jZ~3MXukjCCD3v4YpU7HW37hfU-jRaVnKESDHj46tvEKuzNdErG~LKoHsBCjjc~oGm1CpK2Z6TWLWpejl8IfLs6dLu5UH1-EGg2ev9dWCswk6VipOs-zPbHCyZXIVnDOxcvdyf1hHC8X44agxtAxehcp7CtgL-1atV~vgDTjK62eF6m-pII6ZR~mVE9cN7~Y63RVvpAW-P-XFBwBNaBPVAWJO5NKlZtg2n0Q__",
  },
  {
    isImage: false,
    title: "Precise Diagnosis",
    desc: "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.",
  },
  {
    isImage: true,
    url: "https://s3-alpha-sig.figma.com/img/23ad/ed32/94aa2a9dd47c19df140900a908a8c26c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VVZXsvlPdkNnQcmWaBDKR1wBEj5MhTbDxixff0YyT~yVkxcDNymZfaKT7WpEz5C6VEYHUm6q0pOomYCTZIOiwj00dtTHdmaBZrtsuTNOg-xiy9l9m94O6drv9z6~ZiGLNNycQ36kGnuafas~RQ0PsF0hibtUOh~1XM3sqmeymgRxljEvYcNrKCbAt7G35pEyr-AXg76alPRarKrkoHP1X1u6uuywEhzwxS26JfbHQ5GgHTBlaQjUYk4F2dTA8FJYM~SvcmIfcyU1SOtWstpkLg1dputk5WkH0ksj8JXaj0LioIo8TEXSnlz9qwPQdtZ9ROYn4s6CxHHLrb9Q1zgASQ__",
  },
  {
    isImage: false,
    title: "Zero side-effects",
    desc: "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs",
  },
  {
    isImage: true,
    url: "https://s3-alpha-sig.figma.com/img/63a4/2853/caf304c4ff88f018f79dedae521d759e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J-1ZZbmuk1M7HZBspJf95gc6mYMHoDHR6VaA62O7ilpZg0d38y2A95F8Ml-yh0psazQGZQGYnCjBHpiwNJzh6jw8CUeyk8sM5j3M9FUYolkxOJy~5qFMatrkHObjQV6coXouH8HuxGwYqk-EhKvPQBzhFTNQsSvvVzTJlv6bjILM0pAme07kvKNVsR3rl1fj33Ve1-N-TpVd1tWE9s0U9A-n5~6gG7Va22w38fFyz1wDEJKwiYFxmsbZKCPxvOF5e5t7INhf9u5hdB-duupqCDGyrkwV9jmzgh5StRasVuAer7hKi73D2-mMas5paODJos3~YCp36qWxtj-XPUnuYA__",
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
