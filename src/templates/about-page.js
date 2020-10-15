import React from "react";
import { Col, Container, Row, Visible } from "react-awesome-styled-grid";
import PropTypes from "prop-types";
import {graphql, Link} from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";

import headshot from "../img/jim-headshot.jpg";
import journey from "../img/journey.jpg";
import pills from "../img/pills.jpg";
import research from "../img/research.jpg";
import healthy from "../img/healthy.png";
import consent from "../img/consent.png";
import vaccines from "../img/vaccines.png";
import bully from "../img/bully.png";

export const ShowOnTabletUp = styled.div`
  display: none;
  
  @media print, screen and (min-width: 750px){
    display: block;
  }
`;

export const ShowOnlySmall = styled.div`
  display: block;
  
  @media print, screen and (min-width: 750px){
    display: none;
  }
`;

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Container className="m-t-3">
      <Row>
        <Col xs={12} sm={5} offset={{ sm: 1 }}>
          <h1 className="font-size-xl font-weight-black m-b-3 s-m-t-3">
            Hello! I'm Jim Meehan, MD
          </h1>
          <p className="font-size-s m-b-1 s-m-b-0">
            My passion and purpose is to help you understand how our bodies are
            designed to heal and obtain optimal functionality. My team and I
            invite you to learn as we provide and present material that you can
            understand so you can{" "}
            <strong>become the scientist of your own health.</strong>
          </p>
        </Col>
        <Col xs={12} sm={5} lg={4}>
          <img className="box-shadow-2" src={headshot} alt="" />
          <p className="text-center m-t-half">CEO and Founder of CatalystMD Institute</p>
        </Col>
      </Row>
      <Row className="m-t-3 l-m-t-6">
        <Col>
          <h3 className="font-size-l font-weight-bold text-center m-b-3">
            My Journey
          </h3>
        </Col>
      </Row>
      <Row className="">
        <Col sm={4} offset={{ sm: 1 }}>
          <img className="box-shadow-2" src={journey} alt="" />
        </Col>
        <Col className="m-t-2 s-m-t-1 l-m-t-6" sm={5}>
          <p className="font-size-s">
            From high school in Tulsa, OK, to my appointment to West Point
            Military Academy in New York, and back to Oklahoma for medical
            school, I ultimately landed my dream residency at Washington
            University and Barnes-Jewish Hospital in St. Louis, MO, a top-ten
            ranked ophthalmology residency program. In addition to serving as
            chief resident of the John Cochran VA medical center, I served three
            years as an associate editor for the “Journal of Ocular Immunology
            and Inflammation.”{" "}
          </p>
        </Col>
      </Row>
      <Row className="m-t-3">
        <Col className="m-t-3 s-m-t-1 l-m-t-6" sm={5} offset={{ sm: 2 }}>
          <ShowOnlySmall>
            <img className="box-shadow-2" src={pills} alt="" />
          </ShowOnlySmall>

          <p className="font-size-s m-t-1">
            Early in my career as a top eye surgeon (ophthalmologist), I
            recognized how so many people were suffering from chronic diseases
            that were mistreated, mismanaged, and often made worse by the “pill
            for every ill” medical model. I discovered just how much the
            pharmaceutical and medical industries were profiting at the cost of
            patients’ health. It was apparent that keeping people sick was the
            motive of the medical industry and I had to do my part to change
            that system.
          </p>
        </Col>
        <Col sm={4}>
          <ShowOnTabletUp>
            <img className="box-shadow-2" src={pills} alt="" />
          </ShowOnTabletUp>
        </Col>
      </Row>
      <Row className="m-t-3">
        <Col sm={4} offset={{ sm: 1 }}>
          <img className="box-shadow-2 m-t-3" src={research} alt="" />
        </Col>
        <Col className="m-t-1 s-m-t-1 l-m-t-6" sm={5}>
          <p className="font-size-s">
            As a physician and surgeon, I was often treating diseases with
            surgery that if given preventative care could have possibly been
            avoided. I also encountered my own personal health struggle, more
            than15 years ago, and had to resort to my own research to unravel my
            symptoms, misdiagnosis and find a solution. I realized the need to
            advance my medical training in functional medicine, immunology and
            interventional endocrinology. Through my accumulation of research
            and patient experience over the years, I created a proven protocol,
            The Meehan MINDSET, to help patients reclaim their health.
          </p>
        </Col>
      </Row>
      <Row className="m-t-3">
        <Col className="m-t-3 s-m-t-1 l-m-t-6" sm={5} offset={{ sm: 2 }}>
          <ShowOnlySmall>
            <img src={healthy} alt="" />
          </ShowOnlySmall>
          <p className="font-size-s m-t-1">
            Optimizing hormones and losing unhealthy fat pounds gave me back my
            energy, strength, endurance, brain function, creativity, mood, and
            vitality! By restoring my hormones to youthful levels and
            experiencing the benefits first hand, I was encouraged to continue
            my emphasis in functional medicine and provide the same body, brain,
            and life-restoring benefits of expertly delivered hormone
            optimization therapy and my proven protocol to as many men and women
            as possible.
          </p>
        </Col>
        <Col sm={4}>
          <ShowOnTabletUp>
            <img src={healthy} alt="" />
          </ShowOnTabletUp>
        </Col>
      </Row>
      <Row>
        <Col sm={6} offset={{ sm: 3 }}>
          <h2 className="font-size-m font-weight-semi-bold text-center m-t-6">
            Why is an Ophthalmologist advocating for informed consent?
          </h2>
        </Col>
      </Row>
      <Row className="m-t-3">
        <Col sm={4} offset={{ sm: 1 }}>
          <img className="" src={consent} alt="" />
        </Col>
        <Col className="m-t-1 s-m-t-1" sm={6}>
          <p className="font-size-s">
            What is Informed Consent? Informed consent is when a healthcare
            provider explains a medical treatment to a patient before the
            patient agrees to it. It is meant to be an open dialog between the
            patient and doctor to discuss the treatment and allow the patient to
            accept or deny the treatment.
          </p>
          <p className="font-size-s m-t-1">
            To make an informed choice about any medical procedure you receive,
            Informed consent should include:
          </p>
          <ul className="font-size-s m-t-1 m-l-1">
            <li>Risks</li>
            <li>Benefits</li>
            <li>Alternatives</li>
          </ul>
          <p className="font-size-s m-t-1">
            As a physician, I took The Hippocratic Oath which is an oath of
            ethics. You may be familiar with the phrase “Do No Harm”.
          </p>
        </Col>
      </Row>
      <Row className='m-t-6'>
        <Col sm={6} offset={{ sm: 3 }}>
          <h2 className="font-size-m font-weight-semi-bold text-center">
            The corruption first appeared during my Ophthalmology residency.
          </h2>
        </Col>
      </Row>
      <Row className="s-m-t-3">
        <Col className="m-t-1 s-m-t-1" sm={5} offset={{ sm: 2 }}>
          <p className="font-size-s">
            As an ophthalmology resident physician, I participated in clinical
            research investigating the association between military vaccinations
            and the development of the debilitating autoimmune condition known
            as Gulf War Syndrome.
          </p>
          <p className="font-size-s m-t-1 m-b-1 s-m-b-0">
            As an editor of the medical journal, “Ocular Inflammation and
            Immunology” I experienced one of the world’s most powerful
            pharmaceutical companies blocking the publication of clinical
            research that demonstrated an association between their vaccine and
            retinal inflammation and bleeding in children.
          </p>
        </Col>
        <Col sm={4}>
          <img className="box-shadow-2" src={vaccines} alt="" />
        </Col>
      </Row>
      <Row>
        <Col sm={6} offset={{ sm: 3 }}>
          <h2 className="font-size-m font-weight-semi-bold text-center m-t-6">
            When the doctor is a bully & threatening, something is definitely
            wrong.
          </h2>
        </Col>
      </Row>
      <Row className="m-t-3">
        <Col sm={4} offset={{ sm: 1 }}>
          <img className="" src={bully} alt="" />
        </Col>
        <Col className="m-t-1 s-m-t-1 l-m-t-6" sm={6}>
          <p className="font-size-s">
            Eight weeks after the birth of Isaiah, my first grandchild, my
            daughter called me crying from the pediatrician’s office. The nurse
            and doctor were threatening to call CPS if she did not comply with a
            full battery of vaccines, including the HepB vaccine declined at
            birth.
          </p>
          <p className="font-size-s m-t-1">
            My family experienced the tactics of obfuscation, misinformation,
            and coercion used by the pharmaceutical-medical-industrial-complex
            to bully, harass, and intimidate parents. Never was my daughter
            given informed consent. Never was my daughter given the opportunity
            to have questions answered.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={6} offset={{ sm: 3 }}>
          <h2 className="font-size-m font-weight-semi-bold text-center m-t-6">
            The science is never settled - The big debate!
          </h2>
        </Col>
      </Row>
      <Row className="m-t-1-5 l-m-t-3">
        <Col className="" sm={8} lg={6} offset={{sm:2, lg:3}}>
          <p className="font-size-s">
            <a href='https://vaxxedthemovie.com/'>Vaxxed, The Movie</a> - I was invited to the
            premier in 2016 and asked to give a commentary on the documentary.
            This event propelled me to dig deep into the research - and lack of
            research - in the safety and efficacy of vaccines.
          </p>
          <p className="font-size-s m-t-1">
            Operating as a solo practice, independent of hospital ownership, I
            am able to speak up and expose the corruption within the medical
            community.
          </p>
          <p className="font-size-s m-t-1">
            I encourage parents to question their pediatricians and ask a few
            simple questions. For example:
          </p>
          <ul className="font-size-s m-t-1 m-l-1">
            <li className='m-t-1'>
              What are the ingredients in the vaccine you are recommending for
              my child?
            </li>
            <li className='m-t-1'>Can I read the package inserts?</li>
            <li className='m-t-1'>
              Will you read to me the adverse reactions listed on the package
              insert? ○ Has the CDC’s recommended childhood vaccine schedule
              ever been tested for safety when giving multiple vaccines in one
              visit?
            </li>
            <li className='m-t-1'>
              Does this particular vaccine contain micro fragments of fetal DNA?
            </li>
            <li className='m-t-1'>
              Did this vaccine undergo, gold standard, inert placebo trials?
            </li>
            <li className='m-t-1'>
              More than 54% of American children are suffering from one or more
              chronic illnesses. While the debate continues as to the cause, the
              more you know about the vaccine(s) recommended for your child, the
              more confident you can become in deciding whether to vaccinate or
              not.
            </li>
          </ul>
          <p className="font-size-s m-t-1">
            As a physician, I took The Hippocratic Oath which is an oath of
            ethics. You may be familiar with the phrase “Do No Harm”.
          </p>
          <p className="font-size-s m-t-1">
            I advocate for those who have suffered harm and were only given the
            benefits and no risks of medical procedures.
          </p>
          <p className="font-size-s m-t-1">
            I dedicate my God given purpose to exposing the greed, fraud, and
            pseudoscience responsible for the corruption of the American
            healthcare system and the intolerable harm, suffering, and even
            death of America’s children perpetrated by an out-of-control,
            unaccountable, and uncaring pharmaceutical industry.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='m-b-4' sm={6} offset={{ sm: 3 }}>
          <h2 className="font-size-m font-weight-semi-bold text-center m-t-1 s-m-t-1 l-m-t-6 m-b-2">
            Become the Scientist of your own health and the health of your
            children!
          </h2>
          <Link className="btn m-t-1 display-block margin-auto" to="/contact">
            Contact Us
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

// AboutPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func
// };

const AboutPage = () => {
  return (
    <Layout>
      <AboutPageTemplate
      // contentComponent={HTMLContent}
      // title={post.frontmatter.title}
      // content={post.html}
      />
    </Layout>
  );
};

// AboutPage.propTypes = {
//   data: PropTypes.object.isRequired
// };
//
export default AboutPage;
//
// export const aboutPageQuery = graphql`
//   query AboutPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;
