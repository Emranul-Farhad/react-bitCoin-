import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';
import './Coin.css'





const Coins = () => {

    const [Coins, setCoins] = useState([])

    const [load, setLoad] = useState(false)

    useEffect(() => {

        setLoad(true)

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
            .then(res => res.json())
            .then(data => setCoins(data))
        setLoad(false)
    }, [])

    return (
        <>
            {
                load ? (<Spinner></Spinner>) : (<div>
                    <h2 className='text-center text-3xl font-bold text-gray-800'> Available Crypto Curencys </h2>
                    <p className='text-center mt-5 mb-16 text-2xl font-normal  text-gray-500'> Total Coins {Coins.length} </p>
                    <div className='sp'></div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
                        {
                            Coins.map(coin => <CoinCard key={coin.id} coin={coin} ></CoinCard>)
                        }
                    </div>
                </div>)
            }
        </>
    );
};

export default Coins;