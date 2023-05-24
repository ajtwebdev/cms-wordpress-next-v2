import React from "react";
import styled from "styled-components";
import { Container, Section, FlexMobileOpp } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";
import Image from "../../Image";

const Text = styled.div``;

// const StyledImg = styled(GatsbyImage)`
//   box-shadow: -20px 20px 0px 1px var(--clr-accent);
// `

const ImgStyle = {
  boxShadow: "-20px 20px 0px 1px var(--clr-accent)",
};

const Img = styled.div`
  figure {
    div {
      img {
        box-shadow: -20px 20px 0px 1px var(--clr-accent);
      }
    }
  }
`;

export default function ImageLeft({
  subheader,
  title,
  body,
  image,
  button,
  link,
}) {
  let width = "100%";
  let height = "600px";

  return (
    <Section id="about">
      <Container>
        <FlexMobileOpp>
          <Image
            alt={image.altText || ""}
            srcSet={image.srcSet}
            width={width}
            height={height}
          />
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            ></div>
            {button && link ? (
              <ButtonPrimary href={link}>{button}</ButtonPrimary>
            ) : (
              <ButtonPrimary href="/">order now</ButtonPrimary>
            )}
          </Text>
        </FlexMobileOpp>
      </Container>
    </Section>
  );
}
