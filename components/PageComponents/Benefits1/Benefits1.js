import React from "react";
import styled from "styled-components";
import { Container, GridThree, Section } from "../../layoutComponents";
import { ButtonPrimary } from "../../buttons";
import Image from "../../Image";

// const StyledImg = styled(GatsbyImage)`
//   max-height: 100px;
//   max-width: 100px;
// `

const BenefitItem = styled.div`
  border: 2px solid var(--clr-primary);
  padding: 2em;
  border-radius: var(--br);

  h3 {
    color: var(--txt-dark);
  }

  div {
    p {
      color: var(--txt-body);
    }
  }

  figure {
    div {
      img {
        height: 400px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default function Benefits1({ subheader, title, benefitContent }) {
  let width = "100%";
  let height = "400px";
  return (
    <Section>
      <Container className="spacing-md">
        <div className="center">
          <p className="subheader accent">{subheader}</p>
          <h2 className="title"></h2>
        </div>
        <GridThree>
          {benefitContent.map((benefit) => {
            return (
              <BenefitItem className="spacing center">
                <Image
                  alt={benefit.image.altText || ""}
                  srcSet={benefit.image.srcSet}
                  src={benefit.image.src}
                  width={width}
                  height={height}
                />
                <h3 className="subheader">{benefit.title}</h3>
                {benefit.description ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${benefit.description}`,
                    }}
                  />
                ) : null}
              </BenefitItem>
            );
          })}
        </GridThree>
      </Container>
    </Section>
  );
}
