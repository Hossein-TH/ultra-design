import React from 'react';
import styled from "styled-components";
import {
    ImgWrapper,
    InfoColumn,
    InfoRow,
    TextWrapper,
} from "../../InfoSection/InfoSection-Styles";
import {Link} from "react-router-dom";
import {Button,Container} from "../../../globalStyles";
import IntroImage from "../../../Assets/images/Intro.svg"


const IntroImg = styled.img`
  padding-right: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

const IntroSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: #101522;
`;

const TopLine = styled.div`
  color: #000;
  padding: 5px 2px 5px 2px;
  text-align: center;
  width: 180px;
  background: #f6f4ff;
  border: 1px solid #fafafa;
  border-radius: 30px;
  margin-bottom: 16px;
  
  span {
    color: Magenta;
  }
`;

const Heading = styled.div`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
`;

const Subtitle = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #a9b3c1;
`;

const IntroSection = ({primary}) => {
    return (
        <IntroSec>
        <Container>
            <InfoRow>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine> <span>70%</span> off Grab it now !</TopLine>
                        <Heading>
                            Digital services excellent quality
                        </Heading>
                        <Subtitle>
                            stay ahead of the curve with digital marketing trends. Our
                            leading the pack for computers.
                        </Subtitle>
                        <Link to="/register">
                            <Button big fontBig primary={primary}>
                                Start now
                            </Button>
                        </Link>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper>
                    <IntroImg src={IntroImage}/>
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
        </Container>
        </IntroSec>
    );
};

export default IntroSection;
