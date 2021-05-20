import { graphql } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import Img from "gatsby-image"
import '../styles/index.css'

export default function Home({ data }) {
  return (
    <Layout>
      <section className="hompage__container">
        <article className="homepage__left-box">
          <h2 className="hompage__heading">
            JOSEPHINE <br/>HEDMAN
          </h2>
          <div className="connect__container">
            <img href='https://www.iconsdb.com/icons/preview/black/linkedin-5-xxl.png' alt='linkedin logo'/>
          </div>
        </article>
        <article className="homepage__right-box">
          {/* <Img fluid={data.allContentfulAsset.nodes[0].fluid} alt="Josephine Hedman" className="img-profile"></Img>  */}
        </article>
    </section>
    </Layout>
    )
}

export const imgQuery =
graphql`
query MyQuery {
  allContentfulAsset(filter: {id: {eq: "e5acc676-407e-5018-9c50-74b4bc76a436"}}) {
    nodes {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
}
`