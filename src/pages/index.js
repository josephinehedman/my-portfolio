import React from "react"
import Layout from '../components/Layout'
import '../styles/index.css'
import linkedin from '../../public/linkedin.png'
import github from '../../public/github.svg'

export default function Home() {
  return (
    <Layout>
      <section className="hompage__container">
          <h2 className="hompage__heading">
           HELLO!
          </h2>
          <div className="connect__container">
            <p> Connect with me: </p>
            <div>
              <img src={linkedin} alt='linkedin logo'/>
              <img src={github} alt='github logo'/>
            </div>
          </div>
    </section>
    </Layout>
    )
}

