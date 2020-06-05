import React, { useState } from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import { FaGithubAlt, FaPhoneAlt, FaLinkedin, FaEnvelope } from "react-icons/fa"

import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = e => {
    console.log("change")
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <Layout>
      <Head pageTitle="Contact" />
      <h1 className={contactStyles.titleUnderline}>Contact</h1>
      <div className={contactStyles.flexContainer}>
        <div className={contactStyles.iconContainer}>
          <h2>Get In Touch With Me Directly...</h2>
          <div className={contactStyles.iconWrap}>
            <FaPhoneAlt className={contactStyles.phone} />
            &nbsp;&nbsp;
            <a href="tel: 07816222639">07816222639</a>
          </div>
          <div className={contactStyles.iconWrap}>
            <FaEnvelope className={contactStyles.email} />
            &nbsp;&nbsp;
            <a href="mailto: tom.s.jackson090@gmail.com">
              tom.s.jackson090@gmail.com
            </a>
          </div>
          <div className={contactStyles.iconWrap}>
            <FaGithubAlt className={contactStyles.git} />
            &nbsp;&nbsp;
            <a href="https://github.com/Tom0901"> GitHub</a>
          </div>
          <div className={contactStyles.iconWrap}>
            <FaLinkedin className={contactStyles.link} />
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/mynetwork/"> LinkedIn</a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <h2>Or Try Out This Form I Built... </h2>
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formState.name}
            placeholder="Name"
          ></input>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="Email"
          ></input>
          <textarea
            id={contactStyles.message}
            type="text"
            name="message"
            onChange={handleChange}
            value={formState.message}
            placeholder="Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage
