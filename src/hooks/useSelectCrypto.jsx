import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sand serif;
    font-size: 24px;
    font-weight: bold;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;

`

const useSelectCrypto = (selectLabels ,coins) => {

    const [state, setState] = useState('')

    const SelectCrypto = () => (
        <>
            <Label htmlFor="">{selectLabels}</Label>
            <Select name="" id=""
                value={state}
                onChange={ e => setState(e.target.value) }
            >
                <option value="">Select</option>
                {coins.map( coin => (
                    <option
                        key={coin.id}
                        value={coin.id}
                    >{coin.name}</option>
                ) )}
            </Select>
        </>
    )

    return [state, SelectCrypto]
}

export default useSelectCrypto