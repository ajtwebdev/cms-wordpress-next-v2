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
  background: url("http://www.gameflo-wp.purpleparrotwebsites.com/wp-content/uploads/2023/05/pro-gamers.jpeg"),
    rgba(255, 255, 255, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
  h2 {
    color: var(--txt-dark);
  }
`;

const AccordionStyle = {
  background: "var(--clr-primary)",
  borderRadius: "var(--br)",
  border: "none",
  maxWidth: "800px",
  color: "var(--txt-dark)",
  textAlign: "left",
  padding: "0 20px 0 20px",
};
const AccordionStyleButton = {
  background: "var(--clr-primary)",
  borderRadius: "var(--br)",
  border: "none",
  maxWidth: "600px",
  color: "var(--txt-dark)",
  textAlign: "left",
  padding: "10px 0 10px 3px",
  cursor: "pointer",
};

export default function FaqFeatured({ title, body, questions }) {
  return (
    <Wrapper>
      <Section>
        <center>
          <Container className="spacing">
            <h2 className="title">{title}</h2>
            <Accordion className="spacing">
              {questions.map((item) => {
                return (
                  <AccordionItem style={AccordionStyle}>
                    <h2>
                      <AccordionButton style={AccordionStyleButton}>
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
            <ButtonPrimary href="/">order now</ButtonPrimary>
          </Container>
        </center>
      </Section>
    </Wrapper>
  );
}
