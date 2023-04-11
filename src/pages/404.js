import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled from "styled-components"

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: What are you doing here?" />
      <Wrapper>
        <Illustration src="/images/illustrations/404.svg" alt="Error 404" />
        <TextWrapper>
          <h1>You shouldn't be here</h1>
          <p>
            You just hit a route that doesn&#39;t exist... <br />
            the sadness.
          </p>
        </TextWrapper>
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage

const Wrapper = styled.div`
  top: 180px;
  position: absolute;
  padding: 0 30px 50px 30px;
  width: 100%;

  @media (max-width: 768px) {
    top: 160px;
    padding: 0 20px;
  }
`

const Illustration = styled.img`
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  display: block;
  margin-bottom: 60px;
`

const TextWrapper = styled.div`
  h1 {
    color: white;
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    color: white;
    font-size: 32px;
    font-weight: normal;
    text-align: center;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }
  }
`
