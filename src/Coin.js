import React from 'react'
import './App.css';

const Coin = ({name, image,Symbol,price,volume,priceChange,marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <img src={image} alt="crypto"/>
                <h1>{name}ss</h1>
                <p className="coin-sybol">{Symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${price}</p>
                <p className="coin-colume">${volume.toLocaleString()}</p>
                {priceChange <0 ?(
                    <p className="coin-percent red">{priceChange.
                        toFixed(2)}%</p>
                ):(<p className="coin-percent green">{priceChange.
                    toFixed(2)}%</p>)
                }
                <p className="coin-marketcap">Mkt Cap:${marketcap.toLocaleString} </p>
            </div>
            
        </div>
    )
}

export default Coin
