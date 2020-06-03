import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import imageSrc from "../imgs/speeder.jpg"
import errorStyles from "./404.module.scss"

import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head pageTitle="404"></Head>
      <h1>This is not the page you're looking for...</h1>
      <img className={errorStyles.img} src={imageSrc}></img>
      <p>
        <Link to="/" className={errorStyles.links}>
          Get me off this dust ball!
        </Link>
      </p>
    </Layout>
  )
}

export default NotFound
