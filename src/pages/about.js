import React from 'react'
import Layout from '../components/Layout'

export default function About() {
    return (
        <Layout>
            <section>
                <h2>My Journey</h2>
                <article>
                    <p>
                        I have a MSc in Industrial Management and Engineering (graduated in 2018). 
                        After working for two years as a trainee and later on as a market analyst, I felt it was time to pursue an old dream of mine.
                        Some three intense months of &lt;/salt&gt; bootcamp later, I finally got to work with JavaScript as a FullStack Instructor at the same bootcamp I recently completed.
                    </p>
                </article>
                <article>
                    <div>
                        <h3>
                            Frontend
                        </h3>
                        <p>
                            Javascript, HTML, CSS, React, Gatsby, Redux
                        </p>
                    </div>
                    <div>
                        <h3>
                            Backend
                        </h3>
                        <p>
                            Node.js, Express.js, REST, GraphQL, MongoDB, SQL
                        </p>
                    </div>
                    <div>
                        <h3>
                            Tools
                        </h3>
                        <p>
                            Netlify, Contentful, Heroku, Mocha/Jest, TDD, Figma
                        </p>
                    </div>
                </article>
            </section>
        </Layout>
    )
}
