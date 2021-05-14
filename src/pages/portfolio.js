import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const Portfolio = ({ data }) => {
const nodes = data.allContentfulProject.edges;
console.log(nodes[0].node.body.body)

    return (
        <Layout>
            <div>
                <ul>
                    {nodes.map(node => {
                        return (
                            <li> 
                                {node.node.body.body}
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
                            file {
                            url
                            }
                        }
                        }
                    }
                    }
            }
            `

export default Portfolio;