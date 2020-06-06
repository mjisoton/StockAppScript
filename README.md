# StockAppScript
This is an App Script to be used on the Google platform, created in order to replace the *GOOGLEFINANCE()* function on Google Spreadsheets.
It doesn't replicate every functionality, since it was made with the solo intent to request stock prices via an JSON API.

## How to set up
It is pretty straightforward:
1. Open the Google Spreadsheets you want;
2. Menu Tools > Script Editor;
3. Copy the function there;
4. Save (Ctrl + S).

## Examples
You just have to use the STOCK() function just like you use the native functions. For example:

	=STOCK("MXRF11"; "c")

### Parameters
The *first parameter* is the stock to be requested. Simple like that. But bare in mind that the function will append the ".SA" suffix to South American stock exchanges. If you want to request any other type of stocks, just change or remove the suffix on the function.
The *second parameter* is always one letter, being:
- *o*: Open price of the day
- *h*: High price of the day
- *l*: Low price of the day
- *c*: Current price
- *pc*: Previous close price

## About the API
FibbHub is a free service which provides an JSON API with "real-time stock info, institutional-grade fundamental and alternative data to supercharge your investment for FREE". To create an account, go to https://finnhub.io/.
There is a paid tier which allows you to use very cool endpoints.
