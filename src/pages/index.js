import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
//GSAP
import { TweenMax, Power3, TimelineLite } from "gsap"
//icons
import { FaGithubAlt, FaCloud, FaYoutube } from "react-icons/fa"
//css module
import portfolioStyles from "./portfolio.module.scss"

//GraphQl Query
const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItem {
        edges {
          node {
            title
            description
            address
            host
            demo
            image {
              resize(width: 1920) {
                src
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)
  const tl = new TimelineLite({ delay: 1 })

  let grid = useRef(null)

  useEffect(() => {
    //fade in animation
    TweenMax.fromTo(
      grid,
      1,
      {
        opacity: 0,
      },
      { opacity: 1, ease: Power3.easeInOut }
    )
  })

  return (
    <Layout>
      <Head pageTitle="Home" />
      <h1>Portfolio</h1>
      <ol
        ref={el => {
          grid = el
        }}
      >
        {data.allContentfulPortfolioItem.edges.map(edge => {
          //evaluate if we have a hosted version//

          return (
            <li>
              <a
                href={
                  edge.node.host !== null ? edge.node.host : edge.node.address
                }
              >
                <img
                  src={edge.node.image.resize.src}
                  alt="these are not the imgs you're looking for"
                ></img>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.description}</p>
                <div>
                  {edge.node.address !== null ? (
                    <div className={portfolioStyles.iconWrap}>
                      <FaGithubAlt className={portfolioStyles.git} />
                      &nbsp;&nbsp;
                      <a href={edge.node.address}> GitHub</a>
                    </div>
                  ) : null}
                  {edge.node.host !== null ? (
                    <div className={portfolioStyles.iconWrap}>
                      <FaCloud className={portfolioStyles.cloud} />
                      &nbsp;&nbsp;
                      <a href={edge.node.host}>Visit The Site</a>
                    </div>
                  ) : null}
                  {edge.node.demo !== null ? (
                    <div className={portfolioStyles.iconWrap}>
                      <FaYoutube className={portfolioStyles.youTube} />
                      &nbsp;&nbsp;
                      <a href={edge.node.demo}>Demo Video</a>
                    </div>
                  ) : null}
                </div>
              </a>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default PortfolioPage
