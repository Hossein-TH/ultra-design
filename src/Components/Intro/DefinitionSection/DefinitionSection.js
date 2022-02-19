import React from 'react';
import {
    InfoColumn,
    InfoRow,
    TextWrapper,
} from "../../InfoSection/InfoSection-Styles";
import {Link} from "react-router-dom";
import {Button, Container} from "../../../globalStyles";
import {
    IntroSec,
    Box,
    BoxSubtitle,
    BoxTitle,
    CustomBox,
    Subtitle,
    FounderSubtitle,
    TopLine,
    FounderTitle,
    DesContainer,
    Description,
    Detail,
    DetailCount,
    Founder,
    Heading
} from "./DefinitionSection-Styles";

const DefinitionSection = ({primary}) => {
    return (
        <IntroSec>
            <Container>
                <InfoRow>
                    <InfoColumn>
                        <TextWrapper>
                            <Box>
                                <BoxTitle>
                                    1.Professional support
                                </BoxTitle>
                                <BoxSubtitle>
                                    We also provide tangible results mesaurable long-term business
                                </BoxSubtitle>
                            </Box>
                            <CustomBox>
                                <BoxTitle>
                                    2.Awesome Design
                                </BoxTitle>
                                <BoxSubtitle>
                                    We also provide tangible results mesaurable long-term business
                                </BoxSubtitle>
                            </CustomBox>
                            <Box>
                                <BoxTitle>
                                    3.Planing & Executing
                                </BoxTitle>
                                <BoxSubtitle>
                                    We also provide tangible results mesaurable long-term business
                                </BoxSubtitle>
                            </Box>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine>...About Us</TopLine>
                            <Heading>
                                We are the Best <br/> <span>in your area</span>
                            </Heading>
                            <Subtitle>
                                stay ahead of the curve with digital marketing trends. Our
                                leading the pack for computers. stay ahead of the curve with digital marketing trends.
                                Our
                                leading the pack for computers. stay ahead of the curve with digital marketing trends.
                                Our
                                leading the pack for computers.
                            </Subtitle>
                            <DesContainer>
                                <Description>
                                    <DetailCount>
                                        5485
                                    </DetailCount>
                                    <Detail>
                                        Project Done
                                    </Detail>
                                </Description>
                                <Description>
                                    <DetailCount>
                                        485
                                    </DetailCount>
                                    <Detail>
                                        Clients
                                    </Detail>
                                </Description>
                                <Description>
                                    <DetailCount>
                                        258
                                    </DetailCount>
                                    <Detail>
                                        Runing projects
                                    </Detail>
                                </Description>
                            </DesContainer>
                            <Founder>
                                <FounderTitle>
                                    Hossein Taghipour
                                </FounderTitle>
                                <FounderSubtitle>
                                    Founder and ceo of Ultra
                                </FounderSubtitle>
                            </Founder>
                            <Link to="/register">
                                <Button big fontBig primary={primary}>
                                    Start now
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </IntroSec>
    );
};

export default DefinitionSection;
