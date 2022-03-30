import React from 'react';
import { Link } from 'react-router-dom';




const CoinCard = (props) => {
    const { name, symbol, image, id } = props.coin
    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4' >
            <Link to={`/coin/${id}`} >
                <div className='gap-4 flex justify-between items-center'>
                    <div className='flex-shrink-0'>
                        <img src={image} alt="" class='mx-auto object-cover rounded-full h-16 w-16 ' />
                    </div>
                    <div className=' flex flex-col justify-end'>
                        <span> {name} </span>
                        <span> {symbol} </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CoinCard; 