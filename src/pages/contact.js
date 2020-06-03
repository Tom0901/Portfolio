import React, { useState } from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    //clear form

    //post content
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }
  return (
    <Layout>
      <Head pageTitle="Contact" />
      <h1>Contact</h1>
      <p>Here's my details, or send me a message?</p>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formState.name}
          placeholder="Name"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={formState.email}
          placeholder="Email"
        ></input>
        <label htmlFor="email">Message</label>
        <input
          id="message"
          type="text"
          name="message"
          onChange={handleChange}
          value={formState.message}
          placeholder="message"
        ></input>
      </form>
      <button type="submit">Submit</button>
    </Layout>
  )
}

export default ContactPage
