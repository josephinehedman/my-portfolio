import React from 'react'
import Layout from '../components/Layout'
import '../styles/portfolio.css'
import { graphql } from 'gatsby'

const Portfolio = ({ data }) => {
const nodes = data.allContentfulProject.edges;
const reversedArray = nodes.reverse();

    return (
        <Layout>
            <section className="portfolio__container">
                <article className="portfolio__content">
                    <h2 className="portfolio__heading">My Projects</h2>
                <ul className="portfolio__list">
                    {reversedArray.map(node => {
                        return (
                            <li> 
                                <div className="project__container">
                                    <h3>
                                        {node.node.title}
                                    </h3>
                                    <p className="project__paragraph">
                                        {node.node.body.body}
                                    </p>
                                    <div className="project__links">
                                        <a href={node.node.deployed} target="_blank" className="link__deployed"> Deployed </a>
                                        <a href={node.node.sourceCode} target="_blank" className="link__sourcecode">Source Code </a>
                                    </div>
                                {/* <Img fluid={node.node.image.fluid} alt={node.node.image.fluid.title}></Img>  */}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                </article>
            </section>
        </Layout>
    )
}

   export const query =
        graphql`
            query MyProjects {
                allContentfulProject {
                    edges {
                        node {
                        slug
                        title
                        body {
                            body
                        }
                        deployed
                        sourceCode
                    }
                    }
                }
            }
            `

export default Portfolio;