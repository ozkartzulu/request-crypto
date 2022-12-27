
import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    margin-top: 35px;
    align-items: center;
    gap: 15px
`

const Text = styled.p`
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 10px;
    display: flex;
    span{
        font-weight: bold;
        font-size: 16px;
        margin-left: auto;
        padding-left: 18px;
    }
`

const Image = styled.img`
    width: 100px;
`

function Display({outcome}){
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} = outcome 

    return (
        <Container>
            <Image src={`https://cryptocompare.com${IMAGEURL}`} alt="" />
            <div>
                <Text>The Price is: <span>{PRICE}</span></Text>
                <Text>Highest Price of day: <span>{HIGHDAY}</span></Text>
                <Text>Lowest Price of day: <span>{LOWDAY}</span></Text>
                <Text>Variation last 24 Hours: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last Update: <span>{LASTUPDATE}</span></Text>
            </div>
        </Container>
    )
}

export default Display