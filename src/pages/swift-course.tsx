import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/layout/seo"
import { useWindowSize } from "react-use"
import Header from "../components/layout/Header"
import PurchaseButton from "../components/buttons/PurchaseButton"
import { SmallText } from "../components/styles/TextStyles"

import CourseCard from "../components/cards/CourseCard"
import GridSection from "../components/sections/GridSection"
import FlutterBuild from "../components/builds/FlutterBuild"

const SwiftCourse = ({ data }) => {
  const { width } = useWindowSize()
  const title = data.allContentfulCourse.nodes[0].title
  const description = data.allContentfulCourse.nodes[0].description
  const illustration = data.allContentfulCourse.nodes[0].illustration.url
  const sections = data.allContentfulCourse.nodes[0].sections

  console.log(data)

  return (
    <>
      <SEO
        title="Build a SwiftUI app for iOS 16"
        description="Course about creating a stunning application compatible with iPhone and iPad on the last iOS version using SwiftUI"
        children=""
      />
      <Header />
      <Wrapper>
        <HeroWrapper>
          <CourseCard illustration={illustration} />
          <TextWrapper>
            <Logo src="/images/logos/swiftui-logo.svg" alt="SwiftUI Logo" />
            <Title>{title}</Title>
            <Caption>20 sections - 80 hours of videos</Caption>
            <Description>{description}</Description>
            <AuthorWrapper>
              <AuthorImage src="/images/avatars/Cyril.png" />
              <Caption>Taught by Simone</Caption>
            </AuthorWrapper>
            <PurchaseButton />
            <SmallText>
              Purchase includes access to 30 courses. Over 80 hours of content,
              including 12 hours for SwiftUI, for iOS 15 and iOS 16.
            </SmallText>
          </TextWrapper>
        </HeroWrapper>
        <Divider />
        <GridSection sections={sections} />
        <FlutterWrapper width={width}>
          <FlutterBuild />
        </FlutterWrapper>
      </Wrapper>
    </>
  )
}

export default SwiftCourse

export const query = graphql`
  query SwiftPageQuery {
    allContentfulCourse {
      nodes {
        title
        description
        illustration {
          url
        }
        sections {
          title
          description
          slug
          duration
        }
      }
    }
  }
`

interface FlutterWrapperProps {
  width: number
}

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  z-index: -1;
  overflow: hidden;

  @media (max-width: 780px) {
    height: auto;
  }
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
`

const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: white;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;

  @media (max-width: 780px) {
    justify-items: center;
    text-align: center;
  }
`

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 360px auto;
  gap: 60px;
  padding: 220px 20px 0px;
  justify-content: center;
  margin: 0 auto;

  .courseCard {
    margin-top: 30px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const Caption = styled.p`
  font-size: 15px;
  font-style: normal;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const Description = styled.p`
  max-width: 400px;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: #fff;
`
const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
`
const FlutterWrapper = styled.div<FlutterWrapperProps>`
  margin: 150px auto;

  @media (max-width: 1440px) {
    transform-origin: top left;
    transform: scale(${props => props.width / 1440});
  }
`
const Divider = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 60px auto 32px;
`
