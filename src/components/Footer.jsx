import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Phone,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start bg-[#439A97] text-[#000000]">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px] ">AMMY PHARMACY</h1>
        <p>
          entered the work force cleaning breast pumps at a pharmacy! It was a
          part-time gig while I was at school...no interview required
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <a href="https://www.facebook.com/profile.php?id=100005033712424">
              <Facebook />
            </a>
          </div>
          <div className={socialStyle + ` bg-[#8a3ab9]`}>
            <a href="https://www.instagram.com/p/Cm4ATOTNgtD/">
              <Instagram />
            </a>
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <a href="https://twitter.com/Atrozyyy">
              <Twitter />
            </a>
          </div>
          <div className={socialStyle + ` bg-[#000000]`}>
            <a href="https://gitlab.com/ammy-group1/ammy-pharmacy/-/tree/ReactJS#modal-upload-blob">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2 text-[#000000]">
        <div className="flex m-3">
          <LocationOnOutlined className="text-[#CBEDD5]" />
          <p className="pl-3">Egypt-Cairo</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined className="text-[#CBEDD5]" />
          <p className="pl-3">+02 0000000</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined className="text-[#CBEDD5]" />
          <p className="pl-3">AMMY_PHARMACY@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
