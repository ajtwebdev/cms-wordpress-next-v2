import React from "react"
import styled from "styled-components"
import { ButtonPrimary, ButtonSecondaryLight } from "components/buttons"
import { Actions, Container, HeroBannerPadding } from "components/layoutComponents"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"

const Wrapper = styled.div`
  padding-bottom: 4em;
  p {
    margin-bottom: 0;
  }

  .carousel-indicators {
    margin-bottom: 4rem;
  }
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`

const HeroWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
`

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
`

const Content1 = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/under-deck-lighting-calgary.png"),
    rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content2 = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/deck-banner-3.webp"),
    rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content3 = styled.div`
  background: url("http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/deck-banner-1.webp"),
    rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
}

export default function HeroSlider({ title }) {
  return (
    <Wrapper>
      <HeroGrid>
        <HeroWrapper>
          <Carousel>
            <Carousel.Item interval={5000}>
              <Content>
                <Content1 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h1 className="title">calgary's premier deck builder</h1>
                  <p className="subheader tan">a style from the ground up</p>
                  <ButtonPrimary href="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Content>
                <Content2 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">expand your outdoor living</h2>
                  <p className="subheader tan">Looking for inspiration?</p>
                  <ButtonPrimary href="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Content>
                <Content3 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">take a step outdoors</h2>
                  <p className="subheader tan">
                    Ready to plan your 2023 deck build?
                  </p>
                  <ButtonPrimary href="/contact">get started</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </HeroWrapper>
      </HeroGrid>
    </Wrapper>
  )
}
