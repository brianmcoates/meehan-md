import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const ResourcesPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  books,
  products,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
          backgroundColor: "#f40",
          color: "white",
          padding: "1rem"
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

ResourcesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  introduction: PropTypes.string,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      productImage: PropTypes.string,
      category: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      productImage: PropTypes.string,
      category: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string
    })
  )
};

const ResourcesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ResourcesPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        intro={frontmatter.introduction}
        books={frontmatter.books}
        products={frontmatter.products}
      />
    </Layout>
  );
};

ResourcesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ResourcesPage;

export const resourcesPageQuery = graphql`
  query ResourcesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        description
        introduction
        books {
          heading
          productImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          category
          description
          url
        }
        products {
          heading
          productImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          category
          description
          url
        }
      }
    }
  }
`;
