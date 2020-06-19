import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="column is-10 is-offset-1">
            <h1>Thank you!</h1>
            <p>Thank you for reaching out we will be in contact soon. Here are some of Dr Meehan's latest blog posts.</p>
            <BlogRoll />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
