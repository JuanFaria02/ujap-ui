import React from "react";
import { useTranslation } from "react-i18next";
import { FooterContainer } from "../../atoms/StyledFooter";
import { Box, Container } from "@mui/material";
import { FacebookIcon, InstagramIcon } from "../../icons";
import { getUrlFacebookUjap, getUrlInstagramUjap } from "./functions";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();


  return (
    <FooterContainer className='h-28 absolute w-full bottom-0 content-center'>
      <div className='relative inline ml-[48%]'>
            <Link target='_blank' to={getUrlFacebookUjap()}>
                  <FacebookIcon color='primary'/>
            </Link>
            <Link className='ml-2' target='_blank' to={getUrlInstagramUjap()}>
                  <InstagramIcon color='primary'/>
            </Link>
      </div>
    </FooterContainer>
  );
};

export default React.memo(Footer);
