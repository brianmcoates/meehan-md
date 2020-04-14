import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import placeImg1 from '../img/nature.jpg'
import placeImg2 from '../img/nature2.jpg'
import placeImg3 from '../img/nature3.jpg'
import placeImg4 from '../img/tech.jpg'
import placeImg5 from '../img/tech2.jpg'
import placeImg6 from '../img/tech3.jpg'

import {ResourceItem, FlexBox, ResourceItemImg, ResourceItemDescription} from "../styles/components";

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
      <div className="columns is-centered">
        <div className="column is-10 has-text-centered">
          <h3 className="has-text-weight-semibold is-size-2-mobile is-size-2-tablet">{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
    <section>
      <div className="columns is-centered">
        <div className="column is-12-mobile is-10-tablet">
          <FlexBox>
            <ResourceItem>
              <ResourceItemImg src={placeImg1} alt=""/>
              <ResourceItemDescription>This is a description on a product I would really like for you to click and buy!</ResourceItemDescription>
            </ResourceItem>
            <ResourceItem>
              <ResourceItemImg src={placeImg2} alt=""/>
              <ResourceItemDescription>This is a description on a product I would really like for you to click and buy!</ResourceItemDescription>
            </ResourceItem>
            <ResourceItem>
              <ResourceItemImg src={placeImg3} alt=""/>
              <ResourceItemDescription>This is a description on a product I would really like for you to click and buy! asdfasdfjalskdfjasl dfkjasdlkfjas</ResourceItemDescription >
            </ResourceItem>
          </FlexBox>
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
