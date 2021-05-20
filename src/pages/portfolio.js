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
                                <div>
                                {node.node.body.body}
                                {/* <Img fluid={node.node.image.fluid} alt={node.node.image.fluid.title}></Img>  */}
                                </div>
                            </li>
                        )
                    })}
                </ul>
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
                    }
                    }
                }
            }
            `

export default Portfolio;