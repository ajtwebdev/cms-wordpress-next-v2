import React from "react";
import styled from "styled-components";
import Header from "./headers/header";
import Footer from "./footers/footer";
import FormContact from "./forms/formContact";

const Wrapper = styled.div`
  position: relative;
`;

export default function LayoutJs({ children }) {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <FormContact />
      <Footer />
    </Wrapper>
  );
}
