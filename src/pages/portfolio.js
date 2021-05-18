import React from 'react'
import Layout from '../components/Layout'
import Img from "gatsby-image"
import { graphql } from 'gatsby'

const Portfolio = ({ data }) => {
const nodes = data.allContentfulProject.edges;

    return (
        <Layout>
            <div>
                <ul>
                    {nodes.map(node => {
                        return (
                            <li> 
                                {node.node.body.body}
                                <Img fluid={node.node.image.fluid} alt={node.node.image.fluid.title}></Img> 
                            </li>
                        )
                    })}
                </ul>
                <h2>
                    Portfolio
                </h2>
                <h3>Projects and websites I've created</h3>
            </div>
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
                        image {
                            fluid { ...GatsbyContentfulFluid }
                            }
                        }
                    }
                    }
            }
            `

export default Portfolio;