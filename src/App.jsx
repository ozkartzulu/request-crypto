import { useState } from 'react'
import styled from '@emotion/styled'
import imgCrypto from './img/imagen-criptos.png'

const Heading = styled.h1`
  font-family: Lato, 'sand serif';
  font-size: 34px;
  text-align: center;
  color: #ffffff;
  position: relative;
  &::after{
    content: "";
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translate(-50%,0);
    height: 6px;
    width: 30%;
    background-color: #2400c5;

  }
`
const Container = styled.div`
  max-width: 900px;
  width: 80%;
  margin: 0 auto;
  padding: 80px 15px 30px;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
`

const Image = styled.img`
  max-width: 400px;
  display: block;
  margin: 0 auto;
`

function App() {

  return (
    <Container>
      <Image src={imgCrypto}></Image>
      <div>
        <Heading>Trade Cryptocurrency Instantly</Heading>
      </div>
    </Container>
    
  )
}

export default App
