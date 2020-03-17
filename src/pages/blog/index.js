import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="blog-page">
          <div
            className="full-width-image-container background-position-center blog-page-hero"
            style={{
              backgroundImage: `url('/img/jm-blog-hero.jpeg')`,
            }}
          >
          <h1
            className="has-text-weight-bold is-size-1 has-text-left"
            style={{
              width: '100%',
              maxWidth: '980px',
              margin: 'auto',
              color: 'white',
              padding: '1rem',
            }}
          >
            Truth Seeker
          </h1>
          </div>
          <section className="section">
            <div className="container">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
