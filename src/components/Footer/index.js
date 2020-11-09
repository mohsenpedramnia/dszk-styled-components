import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Logo,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>درباره ما</FooterLinkTitle>
              <FooterLink to="/">شیوه کار</FooterLink>
              <FooterLink to="/">تصدیق و توصیه</FooterLink>
              <FooterLink to="/">فرصت‌های شغلی</FooterLink>
              <FooterLink to="/">حقوق معنوی</FooterLink>
              <FooterLink to="/">شرایط استفاده</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>تماس باما</FooterLinkTitle>
              <FooterLink to="/">تماس</FooterLink>
              <FooterLink to="/">پشتیبانی</FooterLink>
              <FooterLink to="/">مقاصد</FooterLink>
              <FooterLink to="/">پشتیبانان</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>پویانمایی</FooterLinkTitle>
              <FooterLink to="/">نمایش ارسال</FooterLink>
              <FooterLink to="/">تاثیرگذاران</FooterLink>
              <FooterLink to="/">پیشکاری</FooterLink>
              <FooterLink to="/">پیغام آور</FooterLink>
              <FooterLink to="/">توانمندی</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>گواهینامه‌ها</FooterLinkTitle>
              <FooterLink to="/">داخلی</FooterLink>
              <FooterLink to="/">بین المللی</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <Logo />
            </SocialLogo>
            <WebsiteRights>
              DSZK © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.instagram.com/daya.simurgh/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
