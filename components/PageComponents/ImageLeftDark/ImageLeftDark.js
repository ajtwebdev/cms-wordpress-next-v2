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
  h2 {
    color: var(--txt-light);
  }
`;

// const StyledImg = styled(GatsbyImage)`
//   box-shadow: -20px 20px 0px 1px var(--clr-tan);
// `

const Img = styled.div`
  figure {
    div {
      img {
        box-shadow: -20px 20px 0px 1px var(--clr-primary);
      }
    }
  }
`;

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
            <Img>
              <Image
                alt={image.altText || ""}
                srcSet={image.srcSet}
                width={width}
                height={height}
              />
            </Img>

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
                <ButtonSecondaryLight href="/">order now</ButtonSecondaryLight>
              )}
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  );
}
