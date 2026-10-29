import { useState, useMemo } from "react";

const currencies = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7
};

export function CurrencyConverter() {
  const [baseAmount, setBaseAmount] = useState(1)
  const [startCurrency, setStartCurrency] = useState("USD")
  const [targetCurrency, setTargetCurrency] = useState("EUR")

  const convertedAmount = useMemo(() => {
    const amount = parseFloat(baseAmount);
    const result = {};

    Object.keys(currencies).forEach((code) => {
      result[code] = isNaN(amount) ? 
        0
        : ((amount / currencies[startCurrency])) * currencies[code];
    })

    return result;
  }, [baseAmount, startCurrency])


  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <input
        type="number"
        value={baseAmount}
        onChange={(e) => setBaseAmount(e.target.value)}
      />
      <label>
        Start Currency
        <select
          id="start-currency"
          value={startCurrency}
          onChange={(e) => setStartCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
      </label>

      <label>
        Target Currency
        <select
          id="target-currency"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
      </label>

      <div className="result">
        <p>Converted Amount: <span>{convertedAmount[targetCurrency].toFixed(2)}</span> {targetCurrency}</p>
      </div>
    </div>
  )
}