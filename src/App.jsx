import './App.css'
import {useState} from "react";

function App() {
    const [result, setResult] = useState('https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg');
    const [head, setHead] = useState(0);
    const [tail, setTail] = useState(0);
    const [total, setTotal] = useState(0);

    const onClickChange = () => {
        let random = Math.floor(Math.random() * 2);
        if (random === 0){
            setResult('https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg');
            setHead(head+1);
            setTotal(total+1);
        }else {
            setResult('https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg');
            setTail(tail+1);
            setTotal(total+1);
        }
    }
  return (
      <div className='App'>
        <h1 className='app-title'>Coin Flipper</h1>
          <div className="app-media">
          <img className='app-image' src={result} alt='coin-side'/>
          </div>
          <div className="app-content">
              <p className="head-result">Head: {head}</p>
              <p className="tail-result">Tail: {tail}</p>
              <p className="total-result">Total: {total}</p>
          </div>
          <div className="app-actions">
          <button onClick={onClickChange}>Flip the coin</button>
          </div>
      </div>

  )
}

export default App
