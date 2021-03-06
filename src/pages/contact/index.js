import React from "react";
import { Col, Container, Row, Visible } from "react-awesome-styled-grid";
import Layout from "../../components/Layout";
import Form from "./form";
import {
  ReasonsItem,
  ReasonsSection,
  smallFormContainer
} from "../../styles/contact-components";
import CameraSvg from "../../img/CameraSvg";
import BookSvg from "../../img/BookSvg";
import BottleSvg from "../../img/BottleSvg";
import WatchSvg from "../../img/WatchSvg";
import CameraGradientSvg from "../../img/CameraGradientSvg";
import BookGradientSvg from "../../img/BookGradientSvg";
import BottleGradientSvg from "../../img/BottleGradientSvg";
import WatchGradientSvg from "../../img/WatchGradientSvg";
import ContactTalkingPoints from "../../components/ContactTalkingPoints";

const Index = props => {
  const showOnLarge = () => {
    if (window.innerWidth > 1023) {
      return true;
    }
    return false;
  };

  const showOnSmall = () => {
    return !showOnLarge();
  };

  const talkingPoints = [
    {
      image: <CameraGradientSvg />,
      paragraph:
        "You are busy, and life can get in the way of being able to take control of your health. That's why Dr. Meehan is available via telemedicine. Secure video messaging takes down one more barrier from you becoming the scientist of your own health. .",
      header: "We Come To You"
    },
    {
      image: <BookGradientSvg />,
      paragraph:
        "Dr. Meehan has dedicated himself to resourcing you with the most scientifically sound medical information so you can make the most informed decisions possible. He believes this information should be easily accessible to all.",
      header: "Free Resources"
    },
    {
      image: <BottleGradientSvg />,
      paragraph:
        "Dr. Meehan takes a holistic & deeply rooted-in-science approach to medicine. He wholeheartedly believes in finding solutions that will bring healing without harming your body with harsh chemicals and pharmaceuticals laden with side effects.",
      header: "Holistic Medicine"
    },
    {
      image: <WatchGradientSvg />,
      paragraph:
        "Dr. Meehan enthusiastically embraces how we can leverage technology to become more in control of our own health & wellness. ",
      header: "Technology"
    }
  ];

  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12} md={6} offset={{md: 1}}>
            <h1 className="font-weight-black font-size-xl m-b-1 m-t-2">
              You Have Questions Dr. Meehan Has Answers
            </h1>
            <p className="m-b-2">
              Dr. Meehan is aways willing to help patients no matter
              where they are. Fill out the form or call us at{" "}
              <a className="font-weight-bold" href="tel:9186002240">
                918-600-2240
              </a>
              . This is your first step in becoming the scientist of your own
              health.
            </p>
            <Visible xs sm>
              <smallFormContainer>
                <Form />
              </smallFormContainer>
            </Visible>
            <h3 className="font-weight-semi-bold font-size-m m-b-half">
              Why Meehan MD?
            </h3>
            <p className="m-b-2">
              You will find no bigger advocate than Dr. Meehan when it comes to
              helping you take back control of your health. He has dedicated his
              life's work to encourage patients to learn & discover how to
              become a scientist of their own health. Experience a consultation
              where you will be heard and have a personalized health plan
              tailored to you.
            </p>
            <ReasonsSection>
              <ReasonsItem>
                <div>
                  <CameraGradientSvg />
                </div>
                <p>
                  Accepting <br /> Telemed Patients
                </p>
              </ReasonsItem>
              <ReasonsItem>
                <div>
                  <BookGradientSvg />
                </div>
                <p>
                  Free Online <br /> Resources
                </p>
              </ReasonsItem>
            </ReasonsSection>

            <ReasonsSection>
              <ReasonsItem>
                <div>
                  <BottleGradientSvg />
                </div>
                <p>
                  Holistic Medicine <br /> Rooted in Science
                </p>
              </ReasonsItem>
              <ReasonsItem>
                <div>
                  <WatchGradientSvg />
                </div>
                <p>
                  Leveraging <br /> Technology
                </p>
              </ReasonsItem>
            </ReasonsSection>
          </Col>
          <Visible md lg xl>
            <Col xs={12} md={4}>
              <a href="tel:9186002240">
                <h1 className="font-size-m m-t-4 m-b-1 font-weight-bold">
                  918-600-2240
                </h1>
              </a>
              <Form />
            </Col>
          </Visible>
        </Row>
        <Row justify={{ md: "center" }} className="l-m-t-5">
          {talkingPoints.map(points => {
            return (
              <Col xs={12} md={5}>
                <ContactTalkingPoints
                  image={points.image}
                  paragraph={points.paragraph}
                  header={points.header}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export default Index;
