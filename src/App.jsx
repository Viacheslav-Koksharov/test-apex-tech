import { useState, useEffect } from "react";
import { getHistoricalSpotCandleStick } from "./api/binanceAPI";
import SelectProp from "./components/selectProp/selectProp";
import { intervals, pairs } from "./assets/constants";
import CurrencyGraph from "./components/CurrencyGraph/CurrencyGraph";
import "./index.css";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [limit, setLimit] = useState("30m");

  useEffect(() => {
    async function fetchData() {
      try {
        const currency = symbol.split("-").join("");
        const newData = await getHistoricalSpotCandleStick(currency, limit);
        setCurrencies(newData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [symbol, limit]);

  const onSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  const onIntervalChange = (e) => {
    setLimit(e.target.value);
  };

  return (
    <div className="container">
      <div className="select">
        <SelectProp evt={onSymbolChange} val={symbol} inits={pairs} />
        <SelectProp evt={onIntervalChange} val={limit} inits={intervals} />
      </div>
      {currencies.length > 0 && (
        <div className="wrapper">
          <h4>Currency graph</h4>
          <div className="graph">
            <CurrencyGraph data={currencies} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
