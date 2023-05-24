import React from "react";
import styled from "styled-components";
import {
  Container,
  Actions,
  HeroBannerPadding,
} from "components/layoutComponents";
import { ButtonPrimary, ButtonSecondaryLight } from "components/buttons";

const device = {
  md: "60em",
};

const Wrapper = styled.div`
  position: relative;
  padding: 4em 0;
  background: var(--clr-primary);
  display: grid;
  place-items: center;

  min-height: 80vh;
  height: 100%;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  img {
    /* width: 100%; */
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`;

const Text = styled.div`
  max-width: 140ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  h1 {
    color: var(--txt-dark);
  }
  p {
    color: var(--txt-dark);
  }

  @media screen and (max-width: ${device.md}) {
    text-align: center;
  }
`;

const Video = styled.div`
  padding: 30% 0 0 0;
  box-shadow: 10px 10px 0px 1px var(--clr-light);

  @media screen and (max-width: 1197px) {
    padding: 50% 0 0 0;
  }
`;

const Actions1 = styled.div`
  @media screen and (max-width: ${device.md}) {
    display: none;
  }
`;
const Actions2 = styled.div`
  @media screen and (min-width: ${device.md}) {
    display: none;
  }
`;

export default function HeroSlider({ title }) {
  let width = "100%";
  let height = "auto";
  return (
    <div>
      <HeroBannerPadding />
      <Wrapper>
        <Container className="spacing">
          <Flex>
            <Text className="spacing-md">
              <h1 className="title">
                Neurofeedback is a{" "}
                <span className="italics light">Game-Changer.</span> Literally.
              </h1>
              <p className="">
                By monitoring your brain activity during gameplay and actively
                working to change it, you can systematically take your skills to
                the next level.
              </p>
              <Actions1>
                <Actions>
                  <ButtonSecondaryLight href="/contact">
                    order now
                  </ButtonSecondaryLight>
                  <ButtonPrimary href="/contact">contact us</ButtonPrimary>
                </Actions>
              </Actions1>
            </Text>
            <Video style={{ position: "relative" }}>
              <iframe
                src="https://www.youtube.com/embed/OrBiQzvwO_o"
                frameBorder={0}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Home Page Nudes-1080p.mp4"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Video>
          </Flex>
          <Actions2>
            <Actions>
              <ButtonSecondaryLight href="/">order now</ButtonSecondaryLight>
              <ButtonPrimary href="#contact">contact us</ButtonPrimary>
            </Actions>
          </Actions2>
        </Container>
      </Wrapper>
    </div>
  );
}
