import React, { useState } from "react";
import { Col, Container, Row } from "react-awesome-styled-grid";
import {
  FlexBox,
  ResourceHeading,
  ResourceItem,
  ResourceItemDescription,
  ResourceItemImg,
  ResourceToolBar
} from "../styles/components";

const ResourceRow = props => {
  const buildResourceItem = () => {
    console.dir(props.resources)
    return props.resources.map(resource => {
      return (
        <ResourceItem href={resource.url}>
          <ResourceItemImg src={!!resource.productImage.childImageSharp ? resource.productImage.childImageSharp.fluid.src : resource.productImage} alt="" />
          <h3>{resource.heading}</h3>
          <ResourceItemDescription>
            {resource.description}
          </ResourceItemDescription>
        </ResourceItem>
      );
    });
  };
  return (
    <section>
      <Container style={{ overflowX: "auto" }}>
        <Row>
          <Col xs={12} md={8}>
            <ResourceToolBar>
              <ResourceHeading>{props.heading}</ResourceHeading>
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