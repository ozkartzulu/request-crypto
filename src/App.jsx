import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Display from './components/Display'
import Spinner from './components/Spinner'
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

  const [coin, setCoin] = useState({})
  const [outcome, setOutcome] = useState({})
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect( () => {
    if(Object.keys(coin).length > 0){
      const getPriceApi = async () => {
        setShowSpinner(true)
        setOutcome({})
        const {symbol, cryptoCurrency} = coin
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${symbol}`
        const reply = await fetch(url)
        const res = await reply.json()
        setOutcome(res.DISPLAY[cryptoCurrency][symbol])
        setShowSpinner(false)
      }
      getPriceApi()
    }
  }, [coin] )

  return (
    <Container>
      <Image src={imgCrypto}></Image>
      <div>
        <Heading>Trade Cryptocurrency Instantly</Heading>
        <Form
          setCoin = {setCoin}
        >
        </Form>
        { showSpinner && <Spinner></Spinner> }
        { outcome.PRICE && <Display outcome = {outcome}></Display> }
        
      </div>
    </Container>
    
  )
}

export default App
