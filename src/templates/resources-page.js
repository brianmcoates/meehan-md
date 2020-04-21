import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ResourceRow from '../components/ResourceRow';
import { Col, Container, Row } from "react-awesome-styled-grid";

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
          boxShadow: "0.5rem 0 0 #558E97, -0.5rem 0 0 #558E97",
          backgroundColor: "#558E97",
          borderRadius: '4px',
          color: "white",
          padding: "1rem"
        }}
      >
        {title}
      </h2>
    </div>
    <section>
      <Container>
        <Row className='text-centered' justify='center'>
          <Col sm={12} md={5}>
            <h3 className="has-text-weight-semibold is-size-2-mobile is-size-2-tablet">{heading}</h3>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </section>
    <ResourceRow heading={'Books'}/>
    <ResourceRow heading={'Products'}/>
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
        description={frontmatter.description}
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
