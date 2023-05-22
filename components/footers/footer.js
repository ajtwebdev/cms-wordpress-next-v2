import React from "react";
import styled from "styled-components";
import { Container } from "../layoutComponents";
import { FaPhone, FaRegClock } from "react-icons/fa";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { ButtonInline } from "../buttons";
import Link from "next/link";

const device = {
  md: "48em",
  lg: "57em",
};

const IconStyle = {
  color: "var(--clr-accent)",
};

const Flex = styled.div`
  display: flex;
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
      margin-top: var(--spacer-lg);
    }
  }
`;

const Wrapper = styled.footer``;

const FooterWrapperTop = styled.div`
  padding: 4em 0 4em 0;
  background: var(--clr-dark);

  h4 {
    color: var(--clr-tan);
  }

  ul {
    list-style-type: none;
  }

  .about {
    color: var(--clr-light);
  }
`;

const FooterWrapperBottom = styled.div`
  padding: 4em 0 4em 0;
  background: #1a1a1a;

  h4 {
    color: var(--clr-tan);
  }

  ul {
    list-style-type: none;
  }
`;

const Socials = styled.div`
  display: flex;

  & > * + * {
    margin-left: 15px;
  }

  div {
    display: flex;

    & > * + * {
      margin-left: 10px;
    }
  }

  img {
    width: 25px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100px;
  background-color: var(--clr-accent);

  @media screen and (max-width: ${device.md}) {
    display: none;
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-light);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--txt-light);

  @media screen and (max-width: ${device.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: ${device.md}) {
      flex-direction: column;
    }

    & > * + * {
      margin-left: 1em;

      @media screen and (max-width: ${device.md}) {
        margin-left: 0;
      }
    }

    li {
      .a {
        text-transform: capitalize;
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`;

const PageLinks = styled.div`
  color: var(--txt-light);

  ul {
    padding-left: 0;
  }
`;

const Payments = styled.div`
  display: flex;

  & > * + * {
    margin-left: 2px;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-transform: capitalize;
  color: var(--txt-light);
  font-weight: var(--fw-400);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
    color: var(--clr-tan);
  }
`;

const Author = styled.div`
  color: var(--txt-light-secondary);

  div {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    text-align: right;
  }

  a {
    display: inline;
    color: var(--txt-light-secondary);
  }

  .img {
    width: 150px;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <FooterWrapperBottom>
        <Container className="spacing-lg">
          <Copyright>
            <ul>
              <li>Copyright&#169; 2023</li>
              <li>GameFlo</li>
              <li>All Rights Reserved</li>
              <li>
                <Link className="a" href="/terms-of-use">
                  terms of use
                </Link>
              </li>
              <li>
                <Link className="a" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Copyright>
          {/* <Author>
            <Container>
              <div>
                <p>website by: </p>
              </div>
            </Container>
          </Author> */}
        </Container>
      </FooterWrapperBottom>
    </Wrapper>
  );
}
