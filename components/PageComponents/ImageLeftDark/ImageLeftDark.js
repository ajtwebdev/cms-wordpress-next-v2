import React from "react";
import styled from "styled-components";
import { Container, Section, FlexMobileOpp } from "components/layoutComponents";
import { ButtonSecondaryLight } from "components/buttons";
import Image from "components/Image";

const Wrapper = styled.div`
  background: #1a1a1a;
`;

const Text = styled.div`
  color: var(--txt-light);
  p {
    color: var(--txt-light);
  }
`;

// const StyledImg = styled(GatsbyImage)`
//   box-shadow: -20px 20px 0px 1px var(--clr-tan);
// `

export default function ImageLeftDark({
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
    <Wrapper>
      <Section>
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
                <p className="subheader accent">{subheader} </p>
                <h2 className="title">{title}</h2>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${body}`,
                }}
              />
              {button && link ? (
                <ButtonSecondaryLight href={link}>
                  {button}
                </ButtonSecondaryLight>
              ) : (
                <ButtonSecondaryLight href="/contact">
                  get started
                </ButtonSecondaryLight>
              )}
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  );
}
