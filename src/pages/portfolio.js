import React from 'react'
import Layout from '../components/Layout'
import '../styles/portfolio.css'
import { graphql } from 'gatsby'

const Portfolio = ({ data }) => {
const nodes = data.allContentfulProject.edges;

    return (
        <Layout>
            <section className="portfolio__container">
                <article className="portfolio__content">
                    <h2 className="portfolio__heading">My Projects</h2>
                <ul>
                    {nodes.map(node => {
                        return (
                            <li> 
                                <div>
                                    <p className="portfolio__paragraph">
                                        {node.node.body.body}
                                    </p>
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
                    }
                    }
                }
            }
            `

export default Portfolio;