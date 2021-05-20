import { graphql } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import Img from "gatsby-image"
import '../styles/index.css'

export default function Home() {
  return (
    <Layout>
      <section className="hompage__container">
          <h2 className="hompage__heading">
           HELLO!
          </h2>
          <div className="connect__container">
            <p> Connect with me: </p>
            <img href='https://www.iconsdb.com/icons/preview/black/linkedin-5-xxl.png' alt='linkedin logo'/>
          </div>
    </section>
    </Layout>
    )
}

