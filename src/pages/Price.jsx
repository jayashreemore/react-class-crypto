import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Price (props) {
    // make a variable to store our api key
    const apiKey = "36464902-3B16-4C81-A974-61EE7DC436EA";///my api key
    // get the currency symbol from the url
    // the following two lines get the params object from the url (address bar url)
    // and then we will save them into a variable called symbol to use later
    const params = useParams();
    // console.log(params.symbol);
    const symbol = params.symbol;

    // use the apiKey and symbol variables to make our url to fetch
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    // state to hold the coin data
    const [coin, setCoin] = useState(null);

    // function to fetch coin data
    const getCoin = async () => {
        try {
            // console.log(url);
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data);
        } catch (err) {
            console.error(err);
        }
    }

    // useEffect to run getCoin when component mounts
    useEffect(()=>{
        getCoin();
    }, [])

    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }
    const loading = () => {
        return (
            <h1>loading</h1>
        )
    }

    return (
        coin && coin.rate ? loaded() : loading()
    )
}