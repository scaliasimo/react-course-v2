import React from "react"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import Header from "../components/layout/Header"
import SectionContent from "../components/sections/SectionContent"
import { graphql } from "gatsby"

function Section(props) {
  const { data } = props
  const sectionData = data.contentfulSection
  const markdown = sectionData.content.childMarkdownRemark

  console.log(data)
  return (
    <>
      <SEO
        title={sectionData.title}
        description={sectionData.description}
        children=""
      />
      <Header />
      <Wrapper>
        <Hero>
          <Illustration src={sectionData.illustration.url} alt="illustration" />
          <Title>{sectionData.title}</Title>
          <Description>{sectionData.description}</Description>
        </Hero>
      </Wrapper>
      <SectionContent {...markdown} />
    </>
  )
}

export default Section

export const sectionQuery = graphql`
  query SectionQuery($slug: String) {
    contentfulSection(slug: { eq: $slug }) {
      title
      description
      slug
      duration
      illustration {
        url
      }
      content {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  height: 100vh;
`
const Hero = styled.div`
  display: grid;
  gap: 20px;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 20px;
`
const Illustration = styled.img`
  padding-top: 190px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`

const Title = styled.h1`
  max-width: 500px;
  margin: 0 auto;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 62px;
  color: #fff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Description = styled.p`
  max-width: 500px;
  margin: 0 auto;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.7);
  mix-blend-mode: normal;
  padding-bottom: 40px;
`
