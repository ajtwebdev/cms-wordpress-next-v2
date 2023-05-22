import React from "react";
import { Container, Section } from "../../layoutComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styled from "styled-components";

const ImgStyle = {
  marginTop: "auto",
  marginBottom: "auto",
  height: "250px",
  width: "100%",
};

const Wrapper = styled.div`
  background: #ededed;
  padding: 4em 0;
`;

export default function Badges({ title }) {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
  };
  return (
    <Wrapper>
      <div className="spacing">
        {title ? <h2 className="title center">{title}</h2> : null}
        <center>
          <Image
            src="/brag-bar.png"
            alt="video game logos"
            width={600}
            height={400}
          />
        </center>
      </div>
    </Wrapper>
  );
}
