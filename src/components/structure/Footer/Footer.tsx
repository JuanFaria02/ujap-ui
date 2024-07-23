import React from "react";
import { useTranslation } from "react-i18next";
import { FooterContainer } from "../../atoms/StyledFooter";
import { FacebookIcon, InstagramIcon } from "../../icons";
import { getUrlFacebookUjap, getUrlInstagramUjap } from "./functions";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();


  return (
    <FooterContainer className='h-28 absolute w-full bottom-0 content-center'>
      <div className='relative inline ml-[48%]'>
            <a target='_blank' href={getUrlFacebookUjap()}>
                  <FacebookIcon color='primary'/>
            </a>
            <a className='ml-2' target='_blank' href={getUrlInstagramUjap()}>
                  <InstagramIcon color='primary'/>
            </a>
      </div>
    </FooterContainer>
  );
};

export default React.memo(Footer);
