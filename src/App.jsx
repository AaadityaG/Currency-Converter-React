import { useState } from 'react'

import './App.css'
import Inputbox from './components/Inputbox'
import useCurinfo from './hooks/useCurinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurinfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>
      <h1>Currency Converter</h1>
      <div className='CC_card'>
        <form onSubmit={(e) => {
           e.preventDefault(); 
           convert(); 
        }}>
          <div className='input'>
            <Inputbox 
              lab={"From"} 
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)} 
            />
          </div>
          <div className="output">
            <Inputbox 
              lab={"To"}
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              // amountDisable
            />
          </div>
          <div className="convert_swap">
            <button type="submit">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            <button type="button" onClick={swap}>Swap</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
