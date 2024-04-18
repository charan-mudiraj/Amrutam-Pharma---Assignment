import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import youtubeIcon from "../assets/youtube.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import pinterestIcon from "../assets/pinterest.png";

const infos = [
  "About Us",
  "Terms and Conditions",
  "Privacy Policy",
  "Privacy Policy for Mobile Apps",
  "Shipping and Returns Policy",
  "International Delivery",
  "For Businesses, Hotels and Resorts",
];
const icons = [
  facebookIcon,
  instagramIcon,
  youtubeIcon,
  twitterIcon,
  linkedinIcon,
  pinterestIcon,
];
export default function BottomSection() {
  return (
    <div className="flex justify-center md:h-[500px] h-[924px] bg-secondary bg-opacity-[18%]">
      <div className="text-[18px] flex flex-col gap-[34px] w-[307px] md:justify-center md:mt-0 mt-[43px]">
        <div className="flex flex-col gap-[14px] md:hidden">
          <p className="text-secondary font-semibold">Get in touch</p>
          <div className="flex flex-col gap-[10px]">
            <p>support@amrutam.co.in</p>
            <p>
              Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
              Lashkar, Gwalior - 474001
            </p>
            <p>+91 9713171999</p>
          </div>
          <div className="flex gap-[8px] pt-[8px]">
            {icons.map((icon, i) => (
              <img className="h-[40px]" src={icon} />
            ))}
          </div>
        </div>
        <div className="text-left flex flex-col items-start justify-center">
          <p className="text-secondary font-semibold pb-[9px]">Information</p>
          <div className="flex flex-col gap-[7px]"></div>
          {infos.map((info, i) => (
            <p key={i} className="text-[#474747] ">
              {info}
            </p>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-[32px] pt-[25px] md:hidden">
          <p className="font-semibold text-secondary ">
            Subscribe to our Newsletter and join Amrutam Family today!
          </p>
          <div className="flex justify-center relative items-center w-[303px]">
            <input
              type="email"
              className="py-[17px] px-[24px] rounded-full border-[1px] border-secondary w-full text-black focus:outline-none text-[16px]"
              placeholder="Your Email Address"
            />
            <button className="bg-black text-white rounded-r-full absolute h-full right-[1px] px-[19px] py-[15px] font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
