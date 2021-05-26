import React from 'react'
import Layout from '../components/Layout'
import '../styles/about.css'

export default function About() {
    return (
        <Layout>
            <section className="about__container">
                <article className="about__content">
                <h2 className="about__heading">My Journey</h2>
                <article>
                    <p className="about__paragraph">
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
                        <p className="about__paragraph">
                            Javascript, HTML, CSS, React, Gatsby, Redux
                        </p>
                    </div>
                    <div>
                        <h3>
                            Backend
                        </h3>
                        <p className="about__paragraph"> 
                            Node.js, Express.js, REST, GraphQL, MongoDB, SQL
                        </p>
                    </div>
                    <div>
                        <h3>
                            Tools
                        </h3>
                        <p className="about__paragraph">
                            Netlify, Contentful, Heroku, Mocha/Jest, TDD, Figma
                        </p>
                    </div>
                </article>
                </article>
            </section>
        </Layout>
    )
}
