import React from "react"
import styled from "styled-components"
import Header from "./headers/header"

const Wrapper = styled.div`
  position: relative;
`

export default function Layout({ children }) {
  
  return (
    <Wrapper>
        <Header />
      <main>{children}</main>
      {/* <RecentPosts />
      <FinanceBanner />
      <ContactBanner />
      <Footer />
      <GoogleBadge /> */}
    </Wrapper>
  )
}
