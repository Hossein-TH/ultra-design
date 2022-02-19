import React from 'react';
import {InfoSection, Pricing} from "../../Components/ExportIndex";
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from "./Data";

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Pricing/>
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </>
    );
};

export default Home;
