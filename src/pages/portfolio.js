import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Portfolio = ({ data }) => {
const nodes = data.allContentfulProject.edges;
console.log(nodes);


    return (
        <Layout>
            <div>
                <ul>
                    {nodes.map(node => {
                        return (
                            <li> 
                                {documentToReactComponents(JSON.parse(node.description?.raw))}
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
                    description {
                        raw
                    }
                    }
                }
                }
            }
            `

export default Portfolio;