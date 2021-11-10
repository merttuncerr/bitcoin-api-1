import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)

      }).catch(error => alert('yanlış'));
  }, []);
  const handleChange = e => {
    setSearch(e.target.volume)
  }
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Coin Ara</h1>
        <form>
          <input type="text" placeholder="Ara" className="coin-input" onChange={handleChange} />

        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id}
          name={coin.name} 
          image={coin.image} 
          Symbol={coin.Symbol}
          volume={coin.market_cap}
          price={coin.current_price} />
          );
})}
    </div>
  );
}

export default App;
