import { GrFacebook } from "react-icons/gr";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex items-center gap-12 justify-center mb-6 text-[20px] md:text-[25px]">
          <GrFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
        <div className="flex items-center gap-4 md:gap-12 justify-center mb-6 text-[#111827] vs:text-[14px] xs:text-[16px] md::text-[18px]">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy & Policy</a>
          <a href="#">Press Room</a>
        </div>
        <div className="vs:text-[14px] xs:text-[16px] md::text-[18px] flex justify-center text-[#6B7280]">
          © 2021 MovieBox by Adriana Eka Prayudha
        </div>
      </div>
    </footer>
  );
};

export default Footer;
