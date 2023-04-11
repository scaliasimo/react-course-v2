import React from "react"
import styled from "styled-components"

import { renderHtmlAst } from "../../functions/renderHtmlAst"

function SectionContent(props) {
  const { htmlAst } = props

  return <Wrapper>{renderHtmlAst(htmlAst)}</Wrapper>
}

export default SectionContent

const Wrapper = styled.div`
  max-width: 712px;
  margin: 0 auto;
  text-align: start;
  padding: 100px 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  p {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 140%;
  }

  img {
    width: 100%;
    border-radius: 20px;
  }

  .language-swift {
    border-radius: 20px;
  }
`
