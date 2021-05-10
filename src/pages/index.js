import React from "react"
import Layout from '../components/Layout'

export default function Home() {

  return (
    <Layout>
      <section>
        <div>
          <h2>Design</h2>
          <h3>Develop & deploy</h3>
          <p>Fullstack JavaScript developer based in Stockholm</p>
        </div>
        <img src="/ghost.png" alt="ghost banner" style={{maxWidth: '100%'}}/>
    </section>
    </Layout>
    )
}