import './App.css'
import {useState} from "react";

function App() {
    const [result, setResult] = useState('https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg');
    const [coin, setCoin] = useState({head: 0, tail: 0});

    const onClickChange = () => {
        const random = Math.floor(Math.random() * 2);
        if (random === 0){
            setResult('https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg');
            setCoin((prev) => ({...prev, head: prev.head+1}));
        }else {
            setResult('https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg');
            setCoin((prev) => ({...prev, tail: prev.tail+1}));
        }
    }

  return (
      <div className='App'>
        <h1 className='app-title'>Coin Flipper</h1>
          <div className="app-media">
            <img className='app-image' src={result} alt='coin-side'/>
          </div>
          <div className="app-content">
              <p className="head-result">Head: {coin.head}</p>
              <p className="tail-result">Tail: {coin.tail}</p>
              <p className="total-result">Total: {coin.head+coin.tail}</p>
          </div>
          <div className="app-actions">
            <button onClick={onClickChange}>Flip the coin</button>
          </div>
      </div>
  )
}

export default App
