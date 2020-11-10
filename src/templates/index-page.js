import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import SubscribeForm from "../pages/forms/form-subscribe";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1 className="font-weight-bold font-size-xl color-white text-center">
          {title}
        </h1>
        <h3
          className="font-weight-semi-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section>
      <div className="container">
        <div className="section">
          <div className="columns is-centered">
            <div className="column p-l-0 p-r-0 is-10">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="font-size-l text-center full-width">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <p className="text-center">{mainpitch.description}</p>
                  </div>
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn m-t-1" to="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="columns is-centered m-t-6">
                  <div className="column is-8-desktop">
                    <h2 className="text-center full-width font-size-l font-weight-bold">Get monthly health and wellness newsletters in your inbox.</h2>
                  </div>

                </div>
                <div className='columns'>
                  <div className='column'>
                    <p className="text-center">Enter your email to receive monthly Mindset Wellness tips, featured supplements, health coach advice, a special message from Dr. Meehan, patient testimonies, nutrition tips and more!</p>
                  </div>
                </div>
                <div className="columns is-centered m-t-3">
                  <div className="column is-12 is-8-desktop has-text-centered">
                    <SubscribeForm/>
                  </div>
                </div>
                <div className="columns m-t-1">
                  <div className="column is-12 text-center full-width">
                    <h3 className="has-text-weight-semibold is-size-2 m-b-0">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />

                <div className="column p-r-0 p-l-0 is-12 m-t-6">
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
