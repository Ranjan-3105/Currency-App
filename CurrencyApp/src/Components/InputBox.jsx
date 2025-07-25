import React, { useId } from "react";   

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
  
}) {

    const amountInputid = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label htmlFor={amountInputid} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
        id={amountInputid}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && oncuechange(e.target.value)}
          disabled={currencyDisable}
        ></select>

        {currencyOptions.map((currency) => (
          // loop waste key hona chahida... performance enhancer...
          <option value = {currency}
          key={currency}
          >{currency}</option>
        ))}
      </div>
    </div>
  );
}

export default InputBox;
