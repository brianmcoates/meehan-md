import React from "react";
import styled from 'styled-components'

const Header = styled.h4`
  margin-bottom: 16px;
`

const Paragraph = styled.p`
  margin-bottom: 16px;
  text-align: left;
`

const Container = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

const Image = styled.div`
  text-align: center;
  height: 80px;
  width: 80px;
  display: inline-block;
  
  svg{
    width: 80px;
    height: 80px;
  }
`


const ContactTalkingPoints = props =>{
  return(
    <Container>
      <Image>{props.image}</Image>
      <Header className="font-weight-semi-bold font-size-m">{props.header}</Header>
      <Paragraph>{props.paragraph}</Paragraph>
    </Container>
  )
}

export default ContactTalkingPoints
