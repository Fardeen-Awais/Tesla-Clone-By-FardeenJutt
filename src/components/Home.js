import React from 'react'
import styled from 'styled-components'
// import Header from './header'
import Section from './Section'

function Home() {
  return (
    <container>

     <Section
        title="Model X"
        description = "Order Online for Touchless Delivery "
        leftbutton = "Order Now"
        rightbutton = "Exsisting Inventory"
        backgroundImg = "model-x.jpg"
     />
     <Section
     title="Model S"
     description = "Order Online for Touchless Delivery"
     leftbutton = "Order Now"
     rightbutton = "Exsisting Inventory"
     backgroundImg = "model-s.jpg"
     
     /> 
     <Section
     title="Solar Panel "
     description = "Lowest Cost Solar Panels in America "
     leftbutton = "Order Now"
     rightbutton = "Exsisting Inventory"
     backgroundImg = "solar-roof.jpg"
     />
     <Section
     title="Solar Panel pro"
     description = "Lowest Cost Solar Panels in America "
     leftbutton = "Order Now"
     rightbutton = "Exsisting Inventory"
     backgroundImg = "solarpanel399.jpeg"
     />
      </container>

  )
}

export default Home
const container =styled.div`
    height: 100vh;
`