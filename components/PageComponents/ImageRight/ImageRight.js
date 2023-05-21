import React from "react";
import styled from "styled-components";
import { Container, Section, Flex } from "components/layoutComponents";
import { ButtonPrimary } from "components/buttons";
import Image from "components/Image";

const Text = styled.div``;

// const StyledImg = styled(GatsbyImage)`
//   box-shadow: 20px 20px 0px 1px var(--clr-accent);
// `

const ImgStyle = {
  boxShadow: "20px 20px 0px 1px var(--clr-accent)",
};

export default function ImageRight({
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
    <Section>
      <Container>
        <Flex>
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            {body ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${body}`,
                }}
              ></div>
            ) : null}

            {button && link ? (
              <ButtonPrimary href={link}>{button}</ButtonPrimary>
            ) : (
              <ButtonPrimary href="/contact">get started</ButtonPrimary>
            )}
          </Text>
          <Image
            alt={image.altText || ""}
            srcSet={image.srcSet}
            width={width}
            height={height}
          />
        </Flex>
      </Container>
    </Section>
  );
}
