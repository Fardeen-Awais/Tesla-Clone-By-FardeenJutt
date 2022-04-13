import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';

function Section({title,description,leftbutton,rightbutton,backgroundImg}) {
  return (
     <Wrap bgimg={backgroundImg}> {/*yay hum nai wrap k backgroundImg props ko use krnayk liay use kia hai*/}
      <ItemText>
        <Zoom bottom cascade>
        <h1>{title}</h1>
        <p>{description}</p>
        </Zoom>
      </ItemText>
      <Button>
      <ButtonGrp>
      <Zoom bottom cascade>
        <LeftBtn>{leftbutton}</LeftBtn>
        <RightBtn>{rightbutton}</RightBtn>
        </Zoom>
      </ButtonGrp>
      <ArrowDown src="images/down-arrow.svg"/>
      </Button>
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height:100vh;
    background-size: cover; // Background ka size section kay mutabik adjust hojay ga
    background-position:center; //The position section ki center hojay gi
    background-image:${props => `url("/images/${props.bgimg}")`}; // Download kray kisi bhi website ki image is website say:https://extract.pics/
    // Background img ko props say add krnay say pehlay isko wrap component mai iska prop dalna hai
    background-repeat: no-repeat;
    // Wrap Puray section kay items ko control krha isliay hum section kay andar k content ko flex ki madad say manage krsktay hai
    display: flex;
    flex-direction:column;//Yay flex ki direction ko column krday ka jo row mai hai
    justify-content: space-between;
    align-items:center;
`
const ItemText = styled.div`
    padding-top:15vh; //Yay css text item ko padding de gi upar se isliay text top par nahi hoga
    text-align: center;
   
`
const Button = styled.div``
const ButtonGrp = styled.div`
    display: flex; //Yay css hum nai button grp ko center krnay k liay likhi hai
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
    @media (max-width:569px) {
      flex-direction:column; // This will make button more responsive by changing the direction from row to column
    }
    
`
const LeftBtn = styled.div`
    background-color:rgba(23, 26, 32, 0.8);

    color: white;
    opacity: 0.96;
    width: 16em;
    height: 3em;
    display: flex; //Yay btn kay andar k content ko manage krha hai
    justify-content:center; //Horizontal margin ga
    align-items:center; //yay Vertical margin day ga
    border-radius:100px;
    cursor:pointer;
    margin:10px;
    backdrop-filter: blur(10px);
`
const RightBtn = styled(LeftBtn)`//Yay hum nai is liay kia kiu k hum left btn ki hi css ko right mai use krna chahtay hai
    background-color:white;
    opacity:0.69;
    color:black;
    `
const ArrowDown = styled.img`
    margin-top:19px;
    height:40px;
    animation: bouncy 5s  infinite; // Is ki animation hum nai index.css  mai bnai hai
    cursor:pointer;
`