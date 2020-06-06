/*
  STOCK(string :ticker, char :type)
  This function requires an account on FinnHub (https://finnhub.io/). It's free, and easy to set up.
  How it works:
  :ticker: The symbol of the stock to retrieve information;
  :type: The type of information to be retrieved:
  - o: Open price of the day
  - h: High price of the day
  - l: Low price of the day
  - c: Current price
  - pc: Previous close price
  @return: Number, the price requested on the call
*/
function STOCK(ticker, type) {

  //API Token
  var token = 'FINNHUB-TOKEN';

  //API Endpoint
  var url = "https://finnhub.io/api/v1/quote?symbol=" + ticker.toUpperCase() + ".SA&token=" + token;

  //Avoids HTTP 429 (Too many requests)
  Utilities.sleep(parseInt(Math.random() * 10000));

  //Fetch the remote resource
  var json = UrlFetchApp.fetch(url);

  //Converts to a valid JSON object
  json = JSON.parse(json);

  //If the type of price wasn't used, then it is the current price of the stock
  if (typeof type == 'undefined') {
    type = 'c';
  } else {
    type = type.toLowerCase();
  }

  //If the information retrieved is invalid, then just give a null return
  if (typeof json[type] == 'undefined') {
    return null;
  }

  //Converts to a floating point
  var r = parseFloat(json[type]);

  //The End
  return r;
}
