// rfce is the starter or snippets of this function
import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu"; //yarn add @mui/icons-material //yarn add @mui/material @emotion/react @emotion/styled
import CloseIcon from '@mui/icons-material/Close';
import Zoom from 'react-reveal/Zoom';
function Header() {
  const [burgerStatus,setBurgerStatus] = useState(true); //intially hum nai usestate ko false kia
  return (
    <Container>
       <Zoom bottom cascade>
      <a>
        <img src="images/logo.svg" alt="" />
      </a>
      </Zoom>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Solar Roof</a>
        </p>
        <p>
          <a href="#">Solar Panel Roof</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        {/* <a href="#">Menu</a> */}
      </RightMenu>
      <Menuicon onClick={()=>setBurgerStatus(false)}/>
      {/* Menu icon ko display krnay ka component */}
      <StyledBurger show={burgerStatus}> {/* burgerStatus Status By Default True*/}
        <WrapperCloser>
        <CloseI onClick={()=>setBurgerStatus(true)}/>
        </WrapperCloser>
        <li><a href="#">Exsisting Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Cyber Truck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">PowerWall</a></li>
      
    </StyledBurger>
    
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 55px;
  position: fixed; //Yay aik Important task hai is say Header Home component ka hi hisa lgay ga
  display: flex;
  justify-content: space-between; // Jab animation ki waja se left menu display:none hogia to hum nai logo aur right menu k darmyan space rkhnay k liay space between use kia
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index:1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 30px; //The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container. Link:https://developer.mozilla.org/en-US/docs/Web/CSS/flex

  @media screen and (max-width: 722px) {
    display: none;
  }
`
const RightMenu = styled.div`
  padding: 0 23px;
`
const Menuicon = styled(MenuIcon)`
  // Is trah hum icon ko dalay gay
  cursor: pointer;
`
const StyledBurger = styled.div`
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    background-color:white;
    list-style:none;
    width:300px;
    z-index:0;
    display:flex;
    flex-direction:column;
    text-align:start;
    padding:18px;
    transform:${props => props.show ? 'translateX(100%)':'translateX(0)'}; // Hum nai burger status show ko use kia jo false boolean use krrha hai. 
    transition: transform 0.3s ease-in;
    li{
      padding:23px 0;
      border-bottom: 1px solid rgba(0,0, 0, 0.3);
    }
`
const WrapperCloser=styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`
const CloseI = styled(CloseIcon)`
    cursor: pointer;
`