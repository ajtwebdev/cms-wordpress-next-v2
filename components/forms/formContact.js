import React from "react";
import styled from "styled-components";

import { Section, Container, Flex } from "../layoutComponents";
import { Label, Input, TextArea, Submit, Select } from "./formItems";
import { AnchorInline } from "../buttons";

const FormWrapper = styled.div`
  // background: var(--clr-dark);
  // color: var(--txt-light);
  // padding: 2em;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  label {
    text-transform: capitalize;
    margin-left: 2px;
  }
`;

export default function FormContact(props) {
  return (
    <Section>
      <Container>
        <div>
          <h3 className="title center">Get in touch</h3>
        </div>
        <FormWrapper>
          <form
            name="contact"
            className="spacing"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <Flex>
              <div className="spacing-sm">
                <Label htmlFor="name">* Name:</Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="email">* Email:</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </Flex>
            <div className="spacing-sm">
              <Label htmlFor="phone">* Phone:</Label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <hr />
            <div className="spacing-sm">
              <Label htmlFor="msg">* Message:</Label>
              <TextArea
                name="msg"
                id="msg"
                cols="30"
                rows="10"
                placeholder="How can we help you?"
                required
              />
            </div>
            <Submit type="submit" id="submit" value="submit" />
          </form>
        </FormWrapper>
      </Container>
    </Section>
  );
}
