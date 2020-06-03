import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ pageTitle }) => {
  return <Helmet title={`${pageTitle} | Tom Jackson`} />
}

export default Head
