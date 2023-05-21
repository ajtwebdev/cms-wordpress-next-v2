import React from "react";
import styled from "styled-components";
import {
  ButtonPrimary,
  ButtonSecondaryLight,
  ButtonSecondary,
} from "components/buttons";
import {
  Actions,
  Container,
  HeroBannerPadding,
} from "components/layoutComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Wrapper = styled.div`
  p {
    margin-bottom: 0;
  }

  .carousel-indicators {
    margin-bottom: 4rem;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`;

const HeroWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const Content1 = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/under-deck-lighting-calgary.png"),
    rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Content2 = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/deck-banner-3.webp"),
    rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Content3 = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/deck-banner-1.webp"),
    rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
};

export default function HeroSlider({ title }) {
  return (
    <Wrapper>
      <HeroBannerPadding />
      <HeroGrid>
        <HeroWrapper>
          <Carousel>
            <Carousel.Item interval={5000}>
              <Content>
                <Content1 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h1 className="title">
                    Take Your Gameplay to the Next Level with Neuroscience.
                  </h1>
                  <p className="subheader tan">
                    By using neuroscience to get in-game feedback, you can
                    unleash your cognitive potential and take your gameplay to
                    the next level.
                  </p>
                  <Actions>
                    <ButtonSecondaryLight href="/">
                      order now
                    </ButtonSecondaryLight>
                    <ButtonPrimary href="/contact">contact us</ButtonPrimary>
                  </Actions>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Content>
                <Content2 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">
                    Neurofeedback is a Game-Changer. Literally.
                  </h2>
                  <p className="subheader tan">
                    By monitoring your brain activity during gameplay and
                    actively working to change it, you can systematically take
                    your skills to the next level.
                  </p>
                  <Actions>
                    <ButtonSecondaryLight href="/">
                      order now
                    </ButtonSecondaryLight>
                    <ButtonPrimary href="/contact">contact us</ButtonPrimary>
                  </Actions>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Content>
                <Content3 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">
                    Optimize Your Mental State for Peak Gaming Performance
                  </h2>
                  <p className="subheader tan">
                    Our headband is designed to read your brain’s electrical
                    activity, offering you in-game feedback to give you a
                    competitive edge.
                  </p>
                  <Actions>
                    <ButtonSecondaryLight href="/">
                      order now
                    </ButtonSecondaryLight>
                    <ButtonPrimary href="/contact">contact us</ButtonPrimary>
                  </Actions>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </HeroWrapper>
      </HeroGrid>
    </Wrapper>
  );
}
