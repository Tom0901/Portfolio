import React from "react"
import { Link, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogStylePageContentBodyRichTextNode {
        edges {
          node {
            json
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <Head pageTitle="About" />
      <h1>About Me</h1>
      {documentToReactComponents(
        data.allContentfulBlogStylePageContentBodyRichTextNode.edges[0].node
          .json
      )}
    </Layout>
  )
}

export default AboutPage
