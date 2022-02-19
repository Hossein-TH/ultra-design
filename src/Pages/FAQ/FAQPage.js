import React from 'react';
import FAQ from "../../Components/FAQ/FAQ";
import styled from "styled-components";

const Container = styled.div`
  background: #101522;
  padding: 50px 0;
`;

const FAQPage = () => {
    return (
        <Container>
            <FAQ
                Title="Why aren't my components rendering correctly in production builds?"
                Body="To correct this issue, all components on the page need to be initialized such that there is only ever one class name generator among them."/>
            <FAQ
                Title="Why do the fixed positioned elements move when a modal is opened?"
                Body="Scrolling is blocked as soon as a modal is opened. This prevents interacting with the background when the modal should be the only interactive content."/>
            <FAQ
                Title="How can I disable the ripple effect globally?"
                Body="Material-UI uses the same theme helper for creating all its transitions. "/>
            <FAQ
                Title="How can I disable transitions globally?"
                Body="You can go one step further by disabling all transitions and animations effects"/>
            <FAQ
                Title="Do I have to use JSS to style my app?"
                Body="indicating that you can access the DOM element with a ref."/>
        </Container>
    );
};

export default FAQPage;
