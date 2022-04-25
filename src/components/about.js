import React from 'react'
import styled from "styled-components";

function About() {
  return (
    <Container>
      <p>  
      This Tesla clone is only for education pupose
      </p>
        
      <Contact>
      <p>Developer: Fardeen Awais</p>
        <h1>Contact</h1>
        <p>fardeenawais7676@gmail.com</p>
        </Contact>

    </Container>
  )
}

export default About
const  Container = styled.div`
    height: 50vh;
    display:flex;
    background-color:#000;
    color:white;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 1.3;
    width: 100%;
    overflow: hidden;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    padding:0 23px;
`
const Contact = styled.div`
`