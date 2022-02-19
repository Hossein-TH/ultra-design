import React from 'react';
import {Button} from "../../globalStyles";
import Logo from '../../Assets/images/Logo.png';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from "react-icons/all";
import {
    FooterContainer,
    FooterLink,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    Form,
    FormInput,
    SocialIcon,
    SocialIcons,
    SocialIconLink,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
} from "./Footer-Styles";


const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time!
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email'/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/register">How it Works</FooterLink>
                        <FooterLink to="/register">Testimonials</FooterLink>
                        <FooterLink to="/register">Careers</FooterLink>
                        <FooterLink to="/register">Investors</FooterLink>
                        <FooterLink to="/register">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/register">Contact</FooterLink>
                        <FooterLink to="/register">Support</FooterLink>
                        <FooterLink to="/register">Destination</FooterLink>
                        <FooterLink to="/register">Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/register">Submit Videos</FooterLink>
                        <FooterLink to="/register">Ambassadors</FooterLink>
                        <FooterLink to="/register">Agency</FooterLink>
                        <FooterLink to="/register">Influencer</FooterLink>
                        <FooterLink to="/register">introduction</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/register">Instagram</FooterLink>
                        <FooterLink to="/register">Facebook</FooterLink>
                        <FooterLink to="/register">YouTube</FooterLink>
                        <FooterLink to="/register">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon src={Logo}/>
                        Ultra
                    </SocialLogo>
                    <WebsiteRights>Ultra © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;

