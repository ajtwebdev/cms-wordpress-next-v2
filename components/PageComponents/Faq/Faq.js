import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Container, FlexMobileOpp, Section } from "components/layoutComponents";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondaryLight } from "components/buttons";

const Wrapper = styled.div`
  background: url("http://www.gameflo-wp.purpleparrotwebsites.com/wp-content/uploads/woocommerce-placeholder.png"),
    rgba(255, 255, 255, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`;

const AccordionStyle = {
  background: "#90EE80",
  borderRadius: "var(--br)",
  border: "none",
  maxWidth: "600px",
  color: "var(--txt-dark)",
};

export default function FaqFeatured({ title, body, questions }) {
  return (
    <Wrapper>
      <Section>
        <center>
          <Container className="spacing">
            <h2 className="title tan">{title}</h2>
            <Accordion className="spacing">
              {questions.map((item) => {
                return (
                  <AccordionItem style={AccordionStyle}>
                    <h2>
                      <AccordionButton style={AccordionStyle}>
                        <Box
                          className="subheader"
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          {item.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      dangerouslySetInnerHTML={{
                        __html: `${item.answer}`,
                      }}
                    />
                  </AccordionItem>
                );
              })}
            </Accordion>
            <ButtonPrimary href="/">shop now</ButtonPrimary>
          </Container>
        </center>
      </Section>
    </Wrapper>
  );
}
