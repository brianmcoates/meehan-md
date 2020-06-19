import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "react-awesome-styled-grid";
import {
  FlexBox,
  ResourceCategory,
  ResourceHeading,
  ResourceItem,
  ResourceItemDescription,
  ResourceItemImg,
  ResourceToolBar,
  ResourceCategoriesWrapper
} from "../styles/resource-components";
import Cookies from "js-cookie";

const ResourceRow = props => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    let listOfCategories = [];
    props.resources.map(resource =>{
      if(listOfCategories.indexOf(resource.category) === -1 && resource.category !== undefined){
        listOfCategories.push(resource.category)
      }
      setCategories(listOfCategories)
      setSelectedCategory(listOfCategories[0])
    })
  }, [])

  const buildCategories = ()=>{
    return categories.map(category => {
      const active = category === selectedCategory;

      return(
        <ResourceCategory className={active && 'active'} onClick={()=>{setSelectedCategory(category)}}>{category}</ResourceCategory>
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
      <Container style={{ overflowX: "auto", transition: 'all 1s'}}>
        <Row>
          <Col xs={12} md={8}>
            <ResourceToolBar>
              <ResourceHeading>{props.heading}</ResourceHeading>
              <ResourceCategoriesWrapper>{buildCategories()}</ResourceCategoriesWrapper>
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