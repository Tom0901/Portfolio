import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const dynamicDate = new Date().getFullYear()

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}, © {dynamicDate}
      </p>
    </footer>
  )
}

export default Footer
