import React from 'react';
import {
    Container,
    AccordionItem,
    TextTitle,
    Text
} from "./FAQ-Styles";


const FAQ = ({Title,Body}) => {
    return (
        <section>
            <Container>
                    <AccordionItem>
                        <TextTitle>
                            {Title}
                        </TextTitle>
                        <Text>
                            {Body}
                        </Text>
                    </AccordionItem>
            </Container>
        </section>
    );
};

export default FAQ;
