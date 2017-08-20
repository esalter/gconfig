var config = { 
// defaults.  Individual pair settings override this.  ALLPAIRS overrides everything.

//  DEBUG 
DEBUG_LOG:false, 
I_REALLY_WANT_IT:false, 
BUY_SMALL_PORTION:1, 
INSUFFICIENT_FUNDS_ON_SELL_FIX: 0.0005, 
INSUFFICIENT_FUNDS_ON_BUY_FIX: 0.0005, 
//-----------------------------------------------
//   STARTUP OPTIONS 
//----------------------------------------------- 
SELL_ON_START:false,	
CANCEL_SELL_ORDERS_ON_START:false, 
CANCEL_BUY_ORDERS_ON_START:false, 
CANCEL_OPEN_ORDERS_ON_START:false, 
MAX_LATEST_PRICES:300,// limit of latest prices to analyze to determine if price is growing or falling 
MAX_LATEST_DIRECTIONS:30,// limit of latest  price directions ,used in supergun detection 
MAX_LATEST_PRICES_TREND:30, 
MAX_LAST_ORDERS:5,  // keeping last orders bought 
PERIOD: 15,   // candlestick period 
SAVEFILE_SUFFIX: '-save.json', 
//----------------------------------------------- 
//  PRIMARY SETTINGS 
DEFAULT_MARKET_NAME:'bittrex', 
DEFAULT_CURRENCY_PAIR:'BTC_ARK',   //  single pair format for all markets ! 
BUYLVL1: 4, 
BUYLVL2: 4, 
BUYLVL3: 75, 
SELLLVL1: 2, 
SELLLVL2: 2, 
SELLLVL3: 75, 
BUY_STRATEGY: 'STEPGAIN', // accepted values BB or STEPGAIN or GAIN or PINGPONG 
SELL_STRATEGY: 'STEPGAIN', // accepted values BB or STEPGAIN or GAIN or PINGPONG 
LOW_BB: 25, 
HIGH_BB: 25, 
PINGPONG_BUY: 0.12345678, 
PINGPONG_SELL: 0.12345678, 
BUY_LEVEL: 8, // If GAIN buy strategy is used, buy at this percentual below lower ema value 
GAIN: 2, // If GAIN sell strategy is used, sell at this percentual above bought price 
BTC_TRADING_LIMIT: 0.01,// max amount of BTC balance to use for each pair	
SECURITY_MARGIN: 60, // sell all balance if currency decreases x% after you bought it 
MIN_VOLUME_TO_BUY: 0.0005,  // bitrex min volume 
//---BITTREX 
BITTREX_PRICE_METHOD:'ohlc',// ohlc OR vwa  price to buy definition method 
BITTREX_VWA_1_INTERVAL: 0.02,// weighted average interval in minutes 
BITTREX_VWA_2_INTERVAL: 0.04,// weighted average interval in minutes 
//---KRAKEN 
KRAKEN_ASSET_PAIR:'XETHXXBT', 
KRAKEN_PRICE_METHOD:'ohlc',// ohlc OR vwa  price to buy definition method 
KRAKEN_VWA_1_INTERVAL: 0.02,// weighted average interval in minutes 
KRAKEN_VWA_2_INTERVAL: 0.04,// weighted average interval in minutes 
//---POLONIEX 
POLONIEX_PRICE_METHOD:'vwa',// ohlc OR vwa price to buy definition method 
POLONIEX_VWA_1_INTERVAL: 0.02,// weighted average interval in hours 
POLONIEX_VWA_2_INTERVAL: 0.04,// weighted average interval in hours 
//----------------------------------------------- 
//   BOT TIMINGS 
//----------------------------------------------- 
API_CALLS_DELAY:777,
BOT_SLEEP_DELAY:(1000)*120,// bot cycle delay (koef*sec) 
BOT_MAX_LIFETIME:999999999,// overall bot lifetime(koef*min), 
BOT_ON_FAIL_DELAY:(1000)*60, // bot repeat cycle delay if previous cycle failed  (koef*sec) //;
//----------------------------------------------- 
//  OUTPUT 
//----------------------------------------------- 
MAX_LATEST_PRICES_SHOWN: 0, // limit of latest prices to show in console.log 
SHOW_LASTEST_DIRECTIONS:false,  // show chart in console 
MAX_LATEST_DIRECTIONS_SHOWN:0, // chart height 
LASTEST_DIRECTIONS_LIST_WIDTH:0, // chart width 
//----------------------------------------------- 
//   OTHER (might be deprecated/not in use ) 
//----------------------------------------------- 
BTC_BALANCE: 2// btc balance for test purposes, 
};
module.exports = config;
