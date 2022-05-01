import React from "react";
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Me</FooterLinkTitle>

              <FooterLink to="/">Email: xxxxxxxx@yahoo.com</FooterLink>
              <FooterLink to="/">Phone: xxx-xxx-xxxx</FooterLink>
              

            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
