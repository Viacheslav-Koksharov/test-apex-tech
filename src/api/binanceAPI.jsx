import Binance from "binance-api-node";
import events from "events";

const eventEmitter = new events.EventEmitter();
eventEmitter.emit("status", 200, "ok");

const getHistoricalSpotCandleStick = async (symbol, interval) => {
  const client = Binance();

  try {
    const response = await client.candles({
      symbol,
      interval,
    });
    const candles = response.map((candle) => {
      return {
        x: new Date(candle.openTime),
        y: [
          parseFloat(candle.open),
          parseFloat(candle.high),
          parseFloat(candle.low),
          parseFloat(candle.close),
        ],
      };
    });
    return candles;
  } catch (err) {
    return Promise.reject(err);
  }
};

export { getHistoricalSpotCandleStick };
