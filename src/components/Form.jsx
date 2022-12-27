import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Error from './Error'
import useSelectCrypto from "../hooks/useSelectCrypto"
import {coins} from '../data/coins'

const Submit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    color: #fff;
    transition: background-color 0.3s ease;
    margin-top: 30px;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`
function Form({setCoin}){

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)
    const [symbol, SelectCrypto] = useSelectCrypto('Select your coin', coins)
    const [cryptoCurrency, SelectCryptoCurrency] = useSelectCrypto('Select your cryptos', cryptos)
    

    useEffect( () => {
        const fetchApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const reply = await fetch(url)
            const outcome = await reply.json()
            const arrayCryptos = outcome.Data.map( crypto => {
                const object = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                return object
            } )
            setCryptos(arrayCryptos)
            
        }
        fetchApi()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        if([symbol, cryptoCurrency].includes('')){
            setError(true)
            return
        }
        setError(false)
        setCoin({ symbol, cryptoCurrency })
    }

    return (
        <>
            { error && <Error>The fields are required</Error> }
            <form action="" onSubmit={handleSubmit}>
                <SelectCrypto></SelectCrypto>
                <SelectCryptoCurrency></SelectCryptoCurrency>
                <Submit type="submit" value='Request'/>
            </form>
        </>
        
    )
}

export default Form