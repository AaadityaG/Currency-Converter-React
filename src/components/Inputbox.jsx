import React from "react";
import './Inputbox.css'

const Inputbox = ({
    lab,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    currencyDisabled = false,
    amountDisabled = false,
    className = "",
    
}) => {
    return (
        <>
            <div className="outer">
                <label htmlFor="in" >{lab}</label>
                <input type="number" id="in" disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
                <p></p>
                <select name="" id="" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisabled}>
                    {/* <option value="">
                        usd
                    </option> */}
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    );
}
export default Inputbox;