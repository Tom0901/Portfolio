import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

//icons
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa"

import { DiJavascript1, DiMongodb } from "react-icons/di"

import { GrGatsbyjs, GrGraphQl } from "react-icons/gr"

import { AiOutlineConsoleSql } from "react-icons/ai"

//css module
import contactStyles from "./about.module.scss"

//contentful function
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulBlogStylePageContentAboutDescriptionRichTextNode{
        edges{
          node
        {
          json
        }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head pageTitle="About" />
      <h1 className={contactStyles.titleUnderline}>About Me</h1>
      {documentToReactComponents(
        data.allContentfulBlogStylePageContentAboutDescriptionRichTextNode.edges[0].node
          .json
      )}
      <h2>Skills...</h2>
      <div className={contactStyles.skillGrid}>
        <div className={contactStyles.HtmlCss}>
          <div className={`${contactStyles.skill} ${contactStyles.Html}`}>
            <FaHtml5 />
          </div>

          <div className={`${contactStyles.skill} ${contactStyles.Css}`}>
            <FaCss3Alt />
          </div>
          <div className={`${contactStyles.skill} ${contactStyles.Sass}`}>
            <FaSass />
          </div>
          <div className={`${contactStyles.skill} ${contactStyles.Bootsrap}`}>
            <FaBootstrap />
          </div>
        </div>
        <div className={contactStyles.Js}>
          <div className={`${contactStyles.skill} ${contactStyles.JsSkill}`}>
            <DiJavascript1 />
          </div>
          <div className={`${contactStyles.skill} ${contactStyles.React}`}>
            <FaReact />
          </div>
          <div className={`${contactStyles.skill} ${contactStyles.Gatsby}`}>
            <GrGatsbyjs />
          </div>
          <div className={`${contactStyles.skill} ${contactStyles.Node}`}>
            <FaNodeJs />
          </div>
        </div>

        <div className={contactStyles.Db}>
          <div className={`${contactStyles.skill} ${contactStyles.Graph}`}>
            <GrGraphQl />
          </div>
          <div className={`${contactStyles.skill} ${contactStyles.Sql}`}>
            <AiOutlineConsoleSql />
          </div>
          <div className={`${contactStyles.skill} ${contactStyles.Db}`}>
            <DiMongodb />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
