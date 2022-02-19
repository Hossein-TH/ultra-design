import React from 'react';
import { IconContext } from "react-icons";
import { Button } from "../../globalStyles";
import { GiCrystalBars, GiCutDiamond, GiRock } from "react-icons/all";
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingCard,
    PricingCardCost,
    PricingCardFeature,
    PricingCardFeatures,
    PricingCardIcon,
    PricingCardInfo,
    PricingCardLength,
    PricingCardPlan,
    PricingContainer
} from "./Pricing-Styles";

const Pricing = () => {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Our Services</PricingHeading>
                    <PricingContainer>
                        <PricingCard to="/register">
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiRock/>
                                </PricingCardIcon>
                                <PricingCardPlan>Starter Pack</PricingCardPlan>
                                <PricingCardCost>$99.99</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>100 New Users</PricingCardFeature>
                                    <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                    <PricingCardFeature>Retargeting Analytics</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to="/register">
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalBars/>
                                </PricingCardIcon>
                                <PricingCardPlan>Gold Rush</PricingCardPlan>
                                <PricingCardCost>$299.99</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>1000 New Users</PricingCardFeature>
                                    <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                                    <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to="/register">
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCutDiamond/>
                                </PricingCardIcon>
                                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                                <PricingCardCost>$999.99</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>unlimited Users</PricingCardFeature>
                                    <PricingCardFeature>unlimited Budget</PricingCardFeature>
                                    <PricingCardFeature>24/7 Support</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    );
};

export default Pricing;
