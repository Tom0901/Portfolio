import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ pageTitle }) => {
  return <Helmet title={`${pageTitle} | Tom Jackson`} />
}

export default Head
