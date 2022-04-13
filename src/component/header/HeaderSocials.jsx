import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="http://linkedin.com" target="_blank" rel="">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank" rel="">
        <BsGithub />
      </a>
      <a href="http://dribbble.com" target="_blank" rel="">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
