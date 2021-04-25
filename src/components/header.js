import React, { useRef, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import headerStyles from "./header.module.scss"

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.title}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Tom Jackson
            </Link>
          </li>
          <li>
            <AniLink
              paintDrip
              hex="#05b993"
              duration={0.5}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </AniLink>
          </li>
          <li>
            <AniLink
              paintDrip
              hex="#05b993"
              duration={0.5}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </AniLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
