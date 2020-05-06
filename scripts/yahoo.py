import yfinance as yf
import matplotlib.pyplot as plt
from matplotlib.ticker import NullFormatter

tickers = ["SUPN", "UNH", "PTLA"]

for tick in tickers:
    msft = yf.Ticker(tick)
    msft.history(period="30d")["Close"].plot()
    print("Ticker: " + tick)
    plt.show()