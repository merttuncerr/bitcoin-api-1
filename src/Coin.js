import React from 'react'

const Coin = ({name, image,Symbol,price,volume}) => {
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
            </div>
            
        </div>
    )
}

export default Coin
