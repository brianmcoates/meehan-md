import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "react-awesome-styled-grid";
import {
  FlexBox,
  ResourceCategory,
  ResourceHeading,
  ResourceItem,
  ResourceItemDescription,
  ResourceItemImg,
  ResourceToolBar
} from "../styles/components";
import Cookies from "js-cookie";

const ResourceRow = props => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    let listOfCategories = [];
    props.resources.map(resource =>{
      if(listOfCategories.indexOf(resource.category) && resource.category !== undefined){
        listOfCategories.push(resource.category)
      }
      setCategories(listOfCategories)
      setSelectedCategory(listOfCategories[0])
    })
  }, [])


  const buildCategories = ()=>{
    return categories.map(category => {
      return(
        <ResourceCategory>{category}</ResourceCategory>
      )
    })
  };

  const buildResourceItem = () => {
    return props.resources.map(resource => {
      if(resource.category === selectedCategory) {
        return (
          <ResourceItem href={resource.url}>
            <ResourceItemImg
              src={!!resource.productImage.childImageSharp ? resource.productImage.childImageSharp.fluid.src : resource.productImage}
              alt=""/>
            <h3>{resource.heading}</h3>
            <ResourceItemDescription>
              {resource.description}
            </ResourceItemDescription>
          </ResourceItem>

        );
      }
    });
  };
  return (
    <section>
      <Container style={{ overflowX: "auto" }}>
        <Row>
          <Col xs={12} md={8}>
            <ResourceToolBar>
              <ResourceHeading>{props.heading}</ResourceHeading>
              <div>{buildCategories()}</div>
            </ResourceToolBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} justify={{ md: "center" }}>
            <FlexBox>{buildResourceItem()}</FlexBox>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResourceRow